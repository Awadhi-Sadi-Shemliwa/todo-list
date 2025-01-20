import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load environment variables
dotenv.config({ path: "./AI-backend2/.env" });

const app = express();
const port = 5002;

// Middleware
app.use(express.json());
app.use(cors());

// Initialize GoogleGenerativeAI with the API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post("/api/ask", async (req, res) => {
    const { query: prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required." });
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Ensure the input is structured correctly
        const result = await model.generateContent(prompt.toString());

        res.json({ result });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message || "Failed to generate response." });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

