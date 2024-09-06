const express = require("express");
const connectDB = require("./db/connect");
const urlRoute = require("./routes/urlRoute");
const userRoute = require("./routes/userRoute");
const staticRoute = require("./routes/staticRoute");
const path = require('path');
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/", urlRoute);
app.use("/user", userRoute)
app.use("/", staticRoute);



const start = async () => {
  try {
    await connectDB(MONGODB_URL);
    app.listen(PORT, () => {console.log(`App is listening on port ${PORT}`)})
  } catch (error) {
    console.log(error);
    
  }
}

start();