const mongoose = require("mongoose");


// Mongo => Schema
const usersSchema = new mongoose.Schema({
    fristname: { type: String, require: true },
    lastName: { type: String },
    email: { type: String, require: true, unique: true },
    jobTitel: { type: String },
    gender: { type: String },
  },
  {
    timestamps:true
  });

  // Mongo => model

const User = mongoose.model("user", usersSchema);

module.exports = User
  