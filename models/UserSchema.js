"use strict";

const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  department: {type: String, default: "other", enum: ["maintenance","foodservice","other"]},
  isAdmin: {type: Boolean, default: false}
})

module.exports = Mongoose.model("User", UserSchema);
