const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    kingdom: "Bjartheim",
    status: "Backend is running!",
    version: "1.0.0"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "Bjartheim Backend"
  });
});

app.listen(PORT, () => {
  console.log(`Bjartheim backend running on port ${PORT}`);
});
