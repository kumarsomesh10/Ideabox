const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user");

// SIGN UP

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const user = new User({ email, username, password: hash });
    await user.save().then(() => {
      res.status(200).json({ message: "Successfully Registered" });
    });
  } catch (error) {
    res.status(200).json({ message: "User already Exist" });
  }
});

// SIGN IN

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(200).json({ message: "Please Sign Up" });
    } else {
      const isPassCorrect = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!isPassCorrect) {
        res.status(200).json({ message: "Incorect Password" });
      } else {
        const { password, ...others } = user._doc;
        res.status(200).json({ others, message: "SignIn Successful" });
      }
    }
  } catch (error) {
    res.status(200).json({ message: "Some Error in signin" });
  }
});

module.exports = router;
