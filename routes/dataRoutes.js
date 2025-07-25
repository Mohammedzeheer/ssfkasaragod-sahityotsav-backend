const express = require("express");
const router = express.Router();
const multer = require("../util/mutler");
const dataController = require("../controller/getAndPost");

router.get("/startprogram", dataController.startProgram);
router.get("/checkstatprogram", dataController.checkStartProgram);
router.get("/stopprogram", dataController.stopProgram);
router.get("/resetprogram", dataController.resetProgram);
router.get("/getresult", dataController.getData);
router.get("/allresult", dataController.allResult);
router.post("/saveresult", dataController.postData);
router.post("/saveteampoint", dataController.saveTeamPoint);
router.get("/teampoint", dataController.getTeamPoint);
router.post("/imageUpload", multer.templateImagesUpload, dataController.addImage);
router.get("/showImage", dataController.showImage);

module.exports = router;
