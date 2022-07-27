const express = require("express");

const User = require("../models/user.models");

// const { uploadFiles } = require("../middlewares/uploads");
const upload = require("../middlewares/uploads")

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", upload.single("profilePic"), async (req, res) => {
  try {
    //   const user = await User.create(req.body)
    const user = await User.create({
      firstName: req.body.firstName,
      profilePic: req.file.path,
    });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


router.patch("/:id", upload.single("profilePic"), async (req, res) => {

  try {
    const user = await User.findByIdAndUpdate(req.params.id,
      {
        firstName: req.body.firstName,
        lasstName: req.body.lastName,
        profilePic: req.file.path,

      }, { new: true });
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
  try {
    //   const user = await User.create(req.body)
    const user = await User.create({
      firstName: req.body.firstName,
      profilePic: req.file.path,
    });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


module.exports = router;



// --- Refactor code ------
// router.post("", uploadFiles("profilePic", "single"), async (req, res) => {
//   try {
//     //   const user = await User.create(req.body)
//     const user = await User.create({
//       firstName: req.body.firstName,
//       profilePic: req.file.path,
//     });
//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// router.post(
//   "/multiple",
//   uploadFiles("profilePic", "multiple"),
//   async (req, res) => {
//     try {
//       const filePaths = req.files.map((file) => {
//         return file.path;
//       });

//       const user = await User.create({
//         firstName: req.body.firstName,
//         profilePic: filePaths,
//       });

//       return res.status(200).send(user);
//     } catch (err) {
//       return res.status(500).send({ message: err.message });
//     }
//   }
// );

