const mongoose = require("mongoose");

const URLSchema = mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectURL: {
    type: String,
    required: true,
  },
  visitHistory: [{timestam: {type: Number}, }, ],
}, {timestams: true})


const URL = mongoose.model("url", URLSchema);
module.exports = URL;