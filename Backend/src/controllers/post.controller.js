import { Post } from "../modals/post.modal.js";
import { Apierror } from "../utils/APIerror.js";

const createPost = async (req, res) => {
  const { text, image } = req.body;

  if (!text && !image) {
    return res.status(400).json({ message: "Post content is required" });
  }

  try {
    const newPost = new Post({
      user: req.user._id,
      text,
      image,
    });

    await newPost.save();

    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating post",
      error: error.message,
    });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "username fullname avatar")
      .populate({
        path: "comments",
        populate: { path: "user", select: "username avatar" },
      })
      .sort({ createdAt: -1 });

    if (!posts.length)
      return res.status(200).json({ message: "No posts found" });

    res.status(200).json({ message: "Posts fetched", posts });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized action" });
    }

    await Post.findByIdAndDelete(id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
};

export { createPost, getAllPost, deletePost };
