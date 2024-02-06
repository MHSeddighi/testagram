const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const PostController = require("../controllers/PostController");
const CommentController = require("../controllers/CommentController");

router.post("/auth/register", UserController.register);
router.post("/auth/login", UserController.login);

router.get("/users/:userId", UserController.getUserById);
router.get("/users/:userId/posts", UserController.getUserPosts);

router.put("/users/:userId/follow", UserController.followUser);
router.put("/users/:userId/unfollow", UserController.unfollowUser);

router.put("/users/:userId/block", UserController.blockUser);
router.delete("/users/:userId", UserController.deleteUser);

router.post("/posts", PostController.createPost);
router.get("/posts/:postId", PostController.getPost);
router.put("/posts/:postId", PostController.updatePost);
router.delete("/posts/:postId", PostController.deletePost);


router.post("/posts/:postId/comments", CommentController.createComment);
router.delete("/comments/:commentId", CommentController.deleteComment);

module.exports = router;
