"use strict";
const Mongoose = require('mongoose');
const InventorySchema = new Mongoose.Schema({
  amount: {type: Number, required: true},
  dateTaken: {type: Date, default: new Date()},
  takenBy: {type: Mongoose.Schema.Types.ObjectId, ref: "User"}
})


module.exports = Mongoose.model("Inventory", InventorySchema)
