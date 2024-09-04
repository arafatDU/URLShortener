const express = require("express");
const connectDB = require("./db/connect");
const urlRoute = require("./routes/urlRoute");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const app = express();

// Middleware
app.use(express.json());


// Routes
app.use("/", urlRoute);

app.get('/api/urls', (req, res) => {
  return res.json({"message": "Hello World"});
})


const start = async () => {
  try {
    await connectDB(MONGODB_URL);
    app.listen(PORT, () => {console.log(`App is listening on port ${PORT}`)})
  } catch (error) {
    console.log(error);
    
  }
}

start();