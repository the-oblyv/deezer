const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("public"));

app.get("/api/search", async (req, res) => {
    const q = req.query.q;
    try {
        const response = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(q)}`);
        const data = await response.text();
        res.type("application/json").send(data);
    } catch {
        res.status(500).json({ error: "Failed to fetch Deezer" });
    }
});

app.get("/api/artist/:id", async (req, res) => {
    try {
        const response = await fetch(`https://api.deezer.com/artist/${req.params.id}`);
        const data = await response.text();
        res.type("application/json").send(data);
    } catch {
        res.status(500).json({ error: "Failed to fetch artist" });
    }
});
app.get("/api/artist/:id/albums", async (req, res) => {
    try {
        const response = await fetch(`https://api.deezer.com/artist/${req.params.id}/albums`);
        const data = await response.text();
        res.type("application/json").send(data);
    } catch {
        res.status(500).json({ error: "Failed to fetch albums" });
    }
});

app.get("/api/artist/:id/top", async (req, res) => {
    try {
        const response = await fetch(`https://api.deezer.com/artist/${req.params.id}/top?limit=20`);
        const data = await response.text();
        res.type("application/json").send(data);
    } catch {
        res.status(500).json({ error: "Failed to fetch top tracks" });
    }
});
app.get("/api/album/:id", async (req, res) => {
    try {
        const response = await fetch(`https://api.deezer.com/album/${req.params.id}`);
        const data = await response.text();
        res.type("application/json").send(data);
    } catch {
        res.status(500).json({ error: "Failed to fetch album" });
    }
});

app.get("/api/track/:id", async (req, res) => {
    try {
        const response = await fetch(`https://api.deezer.com/track/${req.params.id}`);
        const data = await response.text();
        res.type("application/json").send(data);
    } catch {
        res.status(500).json({ error: "Failed to fetch track" });
    }
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
