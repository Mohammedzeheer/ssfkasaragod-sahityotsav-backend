const express = require("express");
const router = express.Router();
const teamController = require("../controller/teamController");
const checkProgramStarted = require("../middleware/program");

router.post("/addteamname", teamController.addTeam);
router.get("/getteamname", teamController.getTeam);
router.delete("/deleteteam/:teamId", checkProgramStarted, teamController.deleteTeam);
router.put("/editteam", checkProgramStarted, teamController.editTeam);

module.exports = router;
