require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const medications = require("./routes/medications");

// Connect to database
connectDB();

const app = express();

// Add middleware for json body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/medications", medications);

// Add error middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
