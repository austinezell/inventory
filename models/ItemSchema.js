const Mongoose = require('mongoose');

const ItemSchema = new Mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String},
  department: {type: String, required: true, enum: ["household", "foodstuffs", "office"]},
  keywords: [{type: String}],
  UPC: {type: String},
  itemOrModelNum: {type: String},
  prefVendor: {type: String},
  stockAmountCH1: {type: Number, required: true},
  stockAmountCH2: {type: Number, required: true},
  currentAmountCH1: {type: Number},
  currentAmountCH2: {type: Number},
  thresholdCH1: {type: Number, required: true},
  thresholdCH2: {type: Number, required: true},
  unitType: {type: String, required: true},
  lastUpdated: {type: Date}
})

ItemSchema.pre("save", (next)=>{
  this.lastUpdated = new Date();
  next();
});

module.exports = Mongoose.model("Item", ItemSchema)
