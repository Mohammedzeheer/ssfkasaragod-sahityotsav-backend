const express = require("express");
const router = express.Router();
const itemController = require("../Controller/itemController");
const checkProgramStarted = require("../middleware/program");

router.post("/additemname", itemController.addItem);
router.post("/addbulkitems", itemController.addBulkItems);
router.get("/getitemname/:categoryId", itemController.getItem);
router.put("/edititemname", itemController.editItemName);
router.delete("/deleteitemname/:itemId", checkProgramStarted, itemController.deleteItem);

module.exports = router;
