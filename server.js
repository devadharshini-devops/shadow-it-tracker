const express = require("express");
const path = require("path");

const app = express();

// middleware
app.use(express.json());
app.use(express.static(__dirname));

// open index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// 🔥 analyze API (IMPORTANT)
app.post("/analyze", (req, res) => {
    const appName = req.body.appName.toLowerCase();

    if (appName === "linkedin") {
        res.json({ result: "Safe App ✅" });
    } 
    else if (appName === "whatsapp") {
        res.json({ result: "Moderate Risk ⚠️" });
    }
    else {
        res.json({ result: "Shadow IT Risk ❌" });
    }
});

// start server
app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});