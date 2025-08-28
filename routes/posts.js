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

export default router; // export the router object so it can be used in server.js  