const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./connections/connection");
connectDB();
const app = express();
const auth = require("./routes/auth");
const idea = require("./routes/idea");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.use("/api/auth", auth);
app.use("/api/idea", idea);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
