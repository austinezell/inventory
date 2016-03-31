const Mongoose = require('mongoose');
// took out required from unitType. Put it back, later.
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
  unitType: {type: String},
  lastUpdated: {type: Date}
})

ItemSchema.pre("save", (next)=>{
  this.lastUpdated = new Date();
  next();
});

module.exports = Mongoose.model("Item", ItemSchema)
