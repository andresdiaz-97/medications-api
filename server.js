require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const medications = require("./routes/medications");

// Connect to database
connectDB();

const app = express();

app.use("/api/v1/medications", medications);

app.listen(port, () => console.log(`Server running on port ${port}`));
