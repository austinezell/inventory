const Mongoose = require('mongoose');

const ItemSchema = new Mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String},
  department: {type: String, required: true, enum: ["household", "foodstuffs", "office"]},
  keywords: [{type: String}],
  UPC: {type: Number},
  itemOrModelNum: {type: String},
  prefVendor: {type: String},
  stockAmount: {type: Object, default: {CH1: 0, CH2: 0}},
  currentAmount: {type: Object, default: {CH1: 0, CH2: 0}},
  threshold: {type: Object, default: {CH1: 0, CH2: 0}},
  location: {type: String, enum: ["CH1", "CH2", "CH1+CH2"]},
  unitType: {type: String, required: true},
  lastUpdated: {type: Date}
})

ItemSchema.pre("save", (next)=>{
  this.lastUpdated = new Date();
  next();
});

module.exports = Mongoose.model("Item", ItemSchema)
