const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const app = express();
const port = 5001;

// Middleware
app.use(express.json());
app.use(cors());

// Initialize GoogleGenerativeAI with the API key
const genAI = new GoogleGenerativeAI("AIzaSyB1WZll4oxJKKVvnqrrcYqJKKx1ANmBhPY");

app.post("/api/ask", async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required." });
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Ensure the input is structured correctly
        const result = await model.generateContent({
            content: { text: prompt }, // Wrap the prompt in an array with the correct structure
        });

        if (!result || !result.candidates || result.candidates.length === 0) {
            return res.status(500).json({ error: "No response generated." });
        }

        const answer = result.candidates[0].output;
        res.json({ answer });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message || "Failed to generate response." });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
