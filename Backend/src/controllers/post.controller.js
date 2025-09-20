import { Post } from "../modals/post.modal.js";

const createPost = async (req, res) => {
  //* check user auterhsied hai ki nai
  //^ check user ne linkha hai ya nai
  //!create the post
  //? save the post
  const { text, image } = req.body;
  try {
    if (!text) {
      console.log("something should have in post ");
      return res.status(500).json({ message: error.message });
    }
    const newPost = new Post({
      user: req.user.id,
      text,
      image,
    });
    if (!newPost) {
      console.log("error in creating new post");
    }
    await newPost.save();
    res.status(201).json({
      newPost,
      message: "post created",
    });
  } catch (error) {
    console.log("something error in starting point of post", error);
    return res.status(500).json({
      message: `something error in starting point of post ${error.message} `,
    });
  }
};
const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "username ")
      .sort({ createdAt: -1 });
    if (!posts || posts.length === 0) {
      return res.status(200).json({ message: "No posts found" });
    }
    return res.status(200).json({
      message: "Here are all posts",
      posts,
    });
  } catch (error) {
    console.error("Error in getting all posts:", error);
    return res.status(500).json({ message: "Error in getting all posts" });
  }
};
const deletePost = async (req, res) => {
  try {
    const postid = req.params.id;
    const userId = req.user.id;

    if (!postid) {
      console.log(`didn't get the post `);
      return res
        .status(400)
        .json({ message: "didn't get the post id properly" });
    }
    const post = await Post.findById(postid);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.user.toString() !== userId) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this post" });
    }

    const deletePost = await Post.findByIdAndDelete(postid);
    if (!deletePost) {
      console.log(`error in deleting the post `);
      return res.status(400).json({ message: "didn't dinf  the post " });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "error in delteing the post error ::- ",
      error: error.message,
    });
  }
};

export { createPost, getAllPost, deletePost };
