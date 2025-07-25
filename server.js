const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.once("open", () => console.log("MongoDB connected"));

// Import and use routers
app.use("/api", require("./routes/dataRoutes"));
app.use("/api", require("./routes/brochureRoutes"));
app.use("/api", require("./routes/teamRoutes"));
app.use("/api", require("./routes/categoryRoutes"));
app.use("/api", require("./routes/itemRoutes"));
app.use("/api", require("./routes/galleryRoutes"));
app.use("/api", require("./routes/EventRoutes"));

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
