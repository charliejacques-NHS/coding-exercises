import express  from 'express';
import path  from 'path';
import { fileURLToPath } from 'url';
import createQuizRoutes from "./src/quiz-server-routes.js";

const app = express();
const port = 3000;

app.use(express.json());

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

const apiRouter = express.Router("/api");
createQuizRoutes(apiRouter);

app.use("/api", apiRouter);

app.use(express.static(path.join(__dirname, 'src'))); // Serves other static assets from the root

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html')); // Serves index.html specifically from /src
});

// Existing terms and conditions route
app.get('/terms-and-conditions', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'terms-and-conditions.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});