"use strict";
const Mongoose = require('mongoose');
const ItemSchema = new Mongoose.Schema({
  title: {type: String, required: true, unique: true},
  description: {type: String},
  department: {type: String, required: true, enum: ["household", "foodService", "office"]},
  keywords: [{type: String}],
  UPC: {type: Number},
  itemOrModelNum: {type: String},
  prefVendor: {type: String},
  thresholdCH1: {type: Number, default: 0},
  stockAmountCH1: {type: Number, default: 1},
  currentAmountCH1: {type: Number, default: 0},
  thresholdCH2: {type: Number, default: 0},
  stockAmountCH2: {type: Number, default: 1},
  currentAmountCH2: {type: Number, default: 0},
  location: {type: String, required: true, enum: ["CH1", "CH2", "CH1+CH2"]},
  unitType: {type: String, required: true},
  orderLogs:  [{type: Mongoose.Schema.Types.ObjectId, ref: "Orders"}],
  inventoryLogs:  [{type: Mongoose.Schema.Types.ObjectId, ref: "Inventory"}]
})

// ItemSchema.pre("update", preSaveOrUpdate)
ItemSchema.pre("save", preSaveOrUpdate);

function preSaveOrUpdate(next){
  this.lastUpdated = new Date();
  if(!(/s$/.test(this.unitType))){
    this.unitType = `${this.unitType}s`;
  }
  next();
}




module.exports = Mongoose.model("Item", ItemSchema)
