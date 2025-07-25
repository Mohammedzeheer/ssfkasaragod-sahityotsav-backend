const express = require("express");
const router = express.Router();
const eventController = require("../Controller/eventController");
const multer = require("../util/mutler");

router.post("/add-event", multer.EventImagesUpload, eventController.createEvent);
router.get("/get-events", eventController.getEvents);
router.get("/get-event/:id", eventController.getEventById);
router.put("/update-event/:id", eventController.updateEvent);
router.delete("/delete-event/:id", eventController.deleteEvent);

module.exports = router;
