const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const event = new Event({
      title,
      description,
      image: file.path,       // Cloudinary secure_url
      // publicId: file.filename, // Cloudinary public_id (can be used for deletion later)
      status,
    });

    await event.save();
    res.status(201).json(event);
  } catch (err) {
    console.error("Create Event Error:", err.message);
    res.status(500).json({ error: "Failed to create event" });
  }
};

// Get All Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Single Event
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Event
exports.updateEvent = async (req, res) => {
  try {
    const { title, description, image, status } = req.body;
    const updated = await Event.findByIdAndUpdate(
      req.params.id,
      { title, description, image, status },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
