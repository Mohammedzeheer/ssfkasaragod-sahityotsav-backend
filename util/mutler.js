
const multer = require("multer");
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary.js');

const templateStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'template_images',
    allowed_formats: ['jpg', 'jpeg', 'png']
  }
});

const bochureStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'brochure_Images',
    allowed_formats: ['jpg', 'jpeg', "png"]
  }
})

const gallerytorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'gallery_Images',
    allowed_formats: ['jpg', 'jpeg', "png"]
  }
})
const uploadTemplate = multer({ storage: templateStorage });
const uploadBrochure = multer({ storage: bochureStorage })
const uploadGallery = multer({ storage: gallerytorage })

const galleryImagesUpload = uploadGallery.single("image");

const templateImagesUpload = uploadTemplate.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },

]);

const brochureImageUpload = uploadBrochure.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },

]
)

module.exports = {
  templateImagesUpload,
  brochureImageUpload,
  galleryImagesUpload
}