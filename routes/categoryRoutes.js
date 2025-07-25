const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");
const checkProgramStarted = require("../middleware/program");

router.post("/addcategoryname", categoryController.addCategory);
router.get("/getcategoryname", categoryController.getCategory);
router.put("/editcategoryname", categoryController.editCategoryName);
router.delete("/deletecategoryname/:categoryId", checkProgramStarted, categoryController.deletecategory);

module.exports = router;
