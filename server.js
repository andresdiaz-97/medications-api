require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const path = require("path");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const medications = require("./routes/medicationsRoutes");
const users = require("./routes/usersRoutes");
const mongoSanitizer = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");
const fs = require("fs");
const http = require("http");

// Connect to database
connectDB();

// Initialize express
const app = express();

// Add middleware for json body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add routes
app.use("/api/medications", medications);
app.use("/api/users", users);

// Add error middleware
app.use(errorHandler);

// Sanitize data
app.use(mongoSanitizer());

// Set security headers with helmet
app.use(helmet());

// Preven script tags to be put in the database
app.use(xss());

// Prevent http params pollution
app.use(hpp());

// Enable CORS
app.use(cors());

app.use(express.static(path.join(__dirname, "docs")));

// Rate Limiting
// const limiter = rateLimit({
//   windowMS: 10 * 60 * 1000, // 10 mins
//   max: 100,
// });
// app.use(limiter);

app.use((req, res, next) => {
  res.status(404).send("Lo sentimos, la pagina que estas buscando no existe.");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
