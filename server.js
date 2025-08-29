import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import logger from "./middleware/logger.js";
import posts from "./routes/posts.js";
import errorHandler from "./middleware/error.js";
const port = process.env.PORT || 8000;

// get the directory name
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);


const app = express();


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// logger middleware
app.use(logger)

// setup static folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/posts', posts);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
