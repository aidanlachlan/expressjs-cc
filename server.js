const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello, World!</h1>'); // can send HTML
//     // res.send({message: 'JSON!'}); // can send JSON
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// })

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// get all posts
app.get("/api/posts", (req, res) => {
  // console.log(req.query); // query params
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

// get a single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);

  res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
