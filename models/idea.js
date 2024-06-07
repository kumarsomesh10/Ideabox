const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeaSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    user: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Idea = mongoose.model("Idea", IdeaSchema);

module.exports = Idea;
