const express = require("express");
const cors = require("cors");
const aiHandler = require("./ai_handler"); // Import the handler

const app = express();
const port = 5002;

app.use(express.json());
app.use(cors());

app.post("/api/ask", aiHandler); // Use the handler

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
