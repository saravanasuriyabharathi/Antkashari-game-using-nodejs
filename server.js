const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB (Update with your MongoDB connection string)
mongoose.connect("mongodb://127.0.0.1:27017/antakshari", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Define Word Schema
const wordSchema = new mongoose.Schema({ word: String });
const Word = mongoose.model("Words", wordSchema);

// Serve HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Add Word to MongoDB
app.post("/add-word", async (req, res) => {
    try {
        const { word } = req.body;
        if (!word) return res.json({ message: "Invalid word" });

        // Fetch last word from DB
        const lastWordEntry = await Word.findOne().sort({ _id: -1 });
        const lastWord = lastWordEntry ? lastWordEntry.word : null;

        // Check if word follows Antakshari rule
        if (lastWord && word[0] !== lastWord[lastWord.length - 1]) {
            return res.json({ message: `Word must start with '${lastWord[lastWord.length - 1]}'` });
        }

        // Save word to MongoDB
        await new Word({ word }).save();
        res.json({ message: "Word added successfully", word });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Get Words List
app.get("/words", async (req, res) => {
    try {
        const words = await Word.find();
        res.json(words);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
app.post("/restart-game", async (req, res) => {
    await Word.deleteMany({});  // Clears the database
    res.json({ message: "Game restarted!" });
});


// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
