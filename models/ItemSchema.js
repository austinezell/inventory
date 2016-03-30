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
  stockAmount: {type: Object, default: {CH1: 1, CH2: 1}},
  currentAmount: {type: Object, default: {CH1: 0, CH2: 0}},
  threshold: {type: Object, default: {CH1: 0, CH2: 0}},
  location: {type: String, required: true, enum: ["CH1", "CH2", "CH1+CH2"]},
  unitType: {type: String},
  lastUpdated: {type: Date}
})

ItemSchema.pre("save", (next)=>{
  this.lastUpdated = new Date();
  next();
});

module.exports = Mongoose.model("Item", ItemSchema)
