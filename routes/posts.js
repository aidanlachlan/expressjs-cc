import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

router.get("/", (req, res) => {
  // console.log(req.query); // query params
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// get a single post
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ message: `Post with id of ${id} not found` });
  }

  res.status(200).json(post);
});

// create a post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ message: "Title is required" });
  }
  posts.push(newPost);
  res.status(201).json(posts);
});

// update a post
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ message: `Post with id of ${id} not found` });
  }

  post.title = req.body.title;
  res.status(200).json(posts);
});

// delete a post
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ message: `Post with id of ${id} not found` });
  }
  posts = posts.filter((post) => post.id !== id)
  res.status(200).json(posts);
});

export default router; // export the router object so it can be used in server.js
