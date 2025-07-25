const express = require("express");
const router = express.Router();
const multer = require("../util/mutler");
const brochureController = require("../Controller/addBrochure");

router.put("/addBrochure", multer.brochureImageUpload, brochureController.addBrochure);
router.get("/getbrochuse", brochureController.getBrochuse);
router.put("/adddescription", brochureController.addDescription);
router.get("/getdescription", brochureController.getDescription);

module.exports = router;
