const Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");

const CommentController = {
  createComment: async (req, res) => {
    try {
      const { userId, postId, content } = req.body;

      // Find the user who is creating the comment
      const user = await User.findById(userId);

      // Find the post to which the comment belongs
      const post = await Post.findById(postId);

      // Check if the user and post exist
      if (!user || !post) {
        return res.status(404).json({ error: "User or post not found" });
      }

      // Create a new comment
      const comment = new Comment({
        user: userId,
        post: postId,
        content,
      });

      // Save the comment to the database
      await comment.save();

      res.json({ message: "Comment created successfully", comment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = CommentController;
