const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    username: { type: String, unique: true },
    password: { type: String, required: true },
    idea: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Idea",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
