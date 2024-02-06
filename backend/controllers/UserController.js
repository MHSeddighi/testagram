const Post = require("../models/Post");
const User = require("../models/User");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images"); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Generate unique filenames
  },
});

const upload = multer({ storage });

const UserController = {
  register: async (req, res) => {
    try {
      const { username, email, password, photo, bio } = req.body;

      // Check if user with the same username or email already exists
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "Username or email already exists" });
      }
      const user = new User({
        username,
        email,
        password,
        photo: photo ?? "",
        bio,
      });
      await user.save();
      res
        .status(200)
        .json({ message: "User registered successfully", userData: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Find the user by username
      const user = await User.findOne({ username });

      // Check if the user exists and the password is correct
      if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      res.json({ message: "Login successful", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getUserById: async (req, res) => {
    try {
      const { userId } = req.params;

      // Find the user by ID
      const user = await User.findById(userId);

      // Check if the user exists
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getUserPosts: async (req, res) => {
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

  followUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const { followerId } = req.body;

      // Find the user to follow
      const userToFollow = await User.findById(userId);

      // Find the follower
      const follower = await User.findById(followerId);

      // Check if the user to follow or the follower exists
      if (!userToFollow || !follower) {
        return res.status(404).json({ error: "User not found" });
      }

      // Add the follower to the user's "followers" array
      userToFollow.followers.push(followerId);

      // Add the user to the follower's "following" array
      follower.following.push(userId);

      // Save the changes to the database
      await userToFollow.save();
      await follower.save();

      res.json({ message: "User followed successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  unfollowUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const { followerId } = req.body;

      // Find the user to unfollow
      const userToUnfollow = await User.findById(userId);

      // Find the follower
      const follower = await User.findById(followerId);

      // Check if the user to unfollow or the follower exists
      if (!userToUnfollow || !follower) {
        return res.status(404).json({ error: "User not found" });
      }

      // Remove the follower from the user's "followers" array
      userToUnfollow.followers.pull(followerId);

      // Remove the user from the follower's "following" array
      follower.following.pull(userId);

      // Save the changes to the database
      await userToUnfollow.save();
      await follower.save();

      res.json({ message: "User unfollowed successfully" });
    } catch (error) {}
  },

  blockUser: async (req, res) => {
    try {
      const { userId, blockedUserId } = req.params;

      // Find the user who wants to block
      const user = await User.findById(userId);

      // Find the user to be blocked
      const blockedUser = await User.findById(blockedUserId);

      // Check if the user or the blocked user exists
      if (!user || !blockedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      // Add the blocked user to the user's "blockedUsers" array
      user.blockedUsers.push(blockedUserId);

      // Save the changes to the database
      await user.save();

      res.json({ message: "User blocked successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { userId } = req.params;

      // Find the user to be deleted
      const user = await User.findById(userId);

      // Check if the user exists
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Delete the user from the database
      await User.findByIdAndDelete(userId);

      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = UserController;
