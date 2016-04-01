"use strict";
const Mongoose = require('mongoose');
const OrderSchema = new Mongoose.Schema({
  amount: {type: Number, required: true},
  dateOrdered: {type: Date, default: new Date()},
  dateArrived: {type: Date},
  isArrived: {type: Boolean, default: false}
})


module.exports = Mongoose.model("Order", OrderSchema)
