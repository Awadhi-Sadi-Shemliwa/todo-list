const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

module.exports = async function handler(req, res) {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = req.body.query || ""; // Use `query` from request body or default to an empty string
    const promptStr = prompt.toString(); // Convert to string

    try {
        // Call the generative model with the prompt
        const result = await model.generateContent({ prompt: promptStr });

        // Respond with the generated data
        res.json({
            data: result,
            success: true,
            message: "Response generated successfully",
        });
    } catch (err) {
        // Handle errors
        console.error("Error generating content:", err);
        res.json({
            success: false,
            message: err.message,
        });
    }
};
