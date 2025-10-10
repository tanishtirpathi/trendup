import { Comment } from "../modals/comment.model.js";
import { Post } from "../modals/post.model.js";
import { Apierror } from "../utils/APIerror.js";
import { APIresp } from "../utils/APIresp.js";

// 🔹 Add Comment
const addComment = async (req, res) => {
  const { postId } = req.params;
  const { text } = req.body;

  if (!text) return res.status(400).json({ message: "Comment text is required" });

  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const newComment = new Comment({
      post: postId,
      user: req.user._id,
      text,
    });

    await newComment.save();

    post.comments.push(newComment._id);
    await post.save();

    res.status(201).json(
      new APIresp(201, newComment, "Comment added successfully")
    );
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error });
  }
};

// 🔹 Delete Comment
const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    if (comment.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized action" });
    }

    await Comment.findByIdAndDelete(commentId);

    // Also remove reference from post
    await Post.updateOne(
      { comments: commentId },
      { $pull: { comments: commentId } }
    );

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error });
  }
};

// 🔹 Get Comments of a Post
const getCommentsByPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ post: postId })
      .populate("user", "username avatar fullname")
      .sort({ createdAt: -1 });

    res.status(200).json(new APIresp(200, comments, "Comments fetched"));
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
};

export { addComment, deleteComment, getCommentsByPost };
