const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");

//connected to database
connectDB();

const app = express();

// Body parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/api/travel", require("./routes/travelRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
