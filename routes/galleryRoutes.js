const express = require("express");
const router = express.Router();
const multer = require("../util/mutler");
const {
  saveGalleryImage,
  getAllImages,
  deleteGalleryImage,
  get3Images
} = require("../controller/galleryController");

router.post("/upload-gallery", multer.galleryImagesUpload, saveGalleryImage);
router.get("/get-gallery", getAllImages);
router.get("/get3-gallery", get3Images);
router.delete("/delete-gallery/:id", deleteGalleryImage);

module.exports = router;
