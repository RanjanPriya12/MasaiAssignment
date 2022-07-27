const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    profilePic: [{ type: String, required: true }],
    user_id: { type:mongoose.Schema.Types.ObjectId, ref:'user',required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", gallerySchema);
