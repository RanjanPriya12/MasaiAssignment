
// const { uploadFiles } = require("../middlewares/uploads");
const Gallery=require('../models/gallery.model');
const upload = require("../middlewares/uploads");
const express=require('express');

const router = express.Router();

router.post("", upload.single("profilePic"), async (req, res) => {
  try {
    const gallery = await Gallery.create({
      profilePic: req.file.path,
      user_id: req.body.user_id,
    });
    return res.status(200).send(gallery);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/multiple", upload.any("profilePic",5), async (req, res) => {
  try {
    const filePaths = req.files.map((file) => {
      return file.path;
    });

    const gallery = await Gallery.create({
      profilePic: filePaths,
      user_id: req.body.user_id,
    });

    return res.status(200).send(gallery);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


module.exports = router;