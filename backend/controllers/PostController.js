const Post = require("../models/Post");
const User = require("../models/User");

const PostController = {
  createPost: async (req, res) => {
    try {
      const { userId, description, caption, cover_image } = req.body;

      // Find the user who is creating the post
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Create a new post
      const post = new Post({
        userId: user._id,
        description,
        caption,
        image: cover_image ?? "",
      });

      // Save the post to the database
      await post.save();

      res.json({ message: "Post created successfully", post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updatePost: async (req, res) => {
    try {
      const { postId, title, content } = req.body;

      // Find the post to be updated
      const post = await Post.findById(postId);

      // Check if the post exists
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      // Update the post title and content
      post.title = title;
      post.content = content;

      // Save the changes to the database
      await post.save();

      res.json({ message: "Post updated successfully", post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deletePost: async (req, res) => {
    try {
      const { postId } = req.params;

      // Find the post to be deleted
      const post = await Post.findById(postId);

      // Check if the post exists
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      // Delete the post from the database
      await Post.findByIdAndDelete(postId);

      res.json({ message: "Post deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getPost: async (req, res) => {
    try {
      const { postId } = req.params;

      // Find the post by its ID
      const post = await Post.findById(postId).populate("user", "username");

      // Check if the post exists
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.json({ post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getAllPosts: async (req, res) => {
    try {
      // Retrieve all posts from the database
      const posts = await Post.find().populate("user", "username");

      res.json({ posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getPostByUserId: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const posts = await Post.find({ userId: userId });

      res.json({ posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = PostController;
