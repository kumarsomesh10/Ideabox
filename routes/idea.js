const router = require("express").Router();
const User = require("../models/user");
const Idea = require("../models/idea");

// CREATE
router.post("/addidea", async (req, res) => {
  try {
    // Check user exist or not
    const { title, content, id } = req.body;
    const existingUser = await User.findById(id);
    if (existingUser) {
      const list = new Idea({ title, content, user: existingUser });
      await list.save().then(() => {
        res.status(200).json({ list: list });
      });
      existingUser.idea.push(list);
      await existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

// READ
router.get("/getidea/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const idea = await Idea.find({ user: id }).sort({ createAt: -1 });
    if (idea.length !== 0) {
      res.status(200).json({ idea: idea });
    } else {
      res.status(200).json({ message: "No Ideas Uploaded" });
    }
  } catch (error) {
    console.log(error);
  }
});
// UPDATE
router.put("/updateidea/:id", async (req, res) => {
  try {
    const { title, content, username } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      const idea = await Idea.findByIdAndUpdate(req.params.id, {
        title,
        content,
      });
      idea.save().then(() => {
        res.status(200).json({ idea });
      });
    }
  } catch (error) {
    console.log(error);
  }
});
// DELETE
router.delete("/deleteidea/:id", async (req, res) => {
  try {
    const { username } = req.body;
    const existingUser = await User.findOneAndUpdate(
      { username },
      { $pull: { idea: req.params.id } }
    );
    if (existingUser) {
      await Idea.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({ message: "Idea Deleted" });
      });
    }
  } catch (error) {
    res.status(200).json({ message: "There is some Problem" });
  }
});

module.exports = router;
