const express = require("express");
const env = require("dotenv").config();
const port = process.env.PORT || 5000;
const medications = require("./routes/medications");

const app = express();

app.use("/api/v1/medications", medications);

app.listen(port, () => console.log(`Server running on port ${port}`));
