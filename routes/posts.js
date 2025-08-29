import express from "express";
import { getPosts, getPost, createPost, updatePost, deletePost } from "../controllers/postController.js";
const router = express.Router();



//get all posts
router.get("/", getPosts);

// get a single post
router.get("/:id", getPost);

// create a post
router.post("/", createPost);

// update a post
router.put("/:id", updatePost);

// delete a post
router.delete("/:id", deletePost);

export default router; // export the router object so it can be used in server.js
