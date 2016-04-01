"use strict";
const Mongoose = require('mongoose');
const InventorySchema = new Mongoose.Schema({
  amount: {type: Number, required: true},
  dateOrdered: {type: Date, default: new Date()},
  dateArrived: {type: Date},
  isArrived: {type: Boolean, default: false}
})


module.exports = Mongoose.model("Inventory", InventorySchema)
