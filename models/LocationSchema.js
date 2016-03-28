const Mongoose = require("mongoose");

const LocationSchema = new Mongoose.Schema({
  name: {type: String, enum: ["CH1", "CH2"], unique: true},
  address: {type: String},
  items: [{type: Mongoose.Schema.Types.ObjectId, ref: "Item"}]
});

module.exports = Mongoose.model("Location", LocationSchema);
