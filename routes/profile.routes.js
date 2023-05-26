const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");
// 2 videos on youtube explain image upload! Look them up!

// POST "/api/upload" => Route that receives the image, sends it to Cloudinary via the fileUploader and returns the image URL
router.post("/profile/upload", fileUploader.single("imageUrl"), (req, res, next) => {
  // console.log("file is: ", req.file)
 
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  
  // Get the URL of the uploaded file and send it as a response.
  // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend
  
  res.json({ fileUrl: req.file.path });
});

/*router.get('/profile', isAuthenticated, (req, res, next) => {
  User.find(req.params._id)
    .then(_id => res.json(_id))
    .catch(err => res.json(err));
});*/

// Update
router.put("/profile/:userId", (req, res, next) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({ message: "Not a valid ID!" });
      return;
}

  User.findByIdAndUpdate(userId, req.body, { new: true })
  .then((updatedProfile) => res.json(updatedProfile))
  .catch(error => res.json(error));
  });

  router.get("/profile/:userId", (req, res, next) => {
    const { userId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: "Not a valid ID!" });
        return;
    }
  
    User.findById(userId)
    .then(user => res.status(200).json(user))
    .catch(error => res.json(error));
  });




/*router.post("/profile/upload", (req, res, next) => {
  const { image } = req.body;

  Card.create({ image })
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});*/

module.exports = router;
