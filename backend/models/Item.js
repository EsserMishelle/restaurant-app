// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// // Ensure the Category model is processed by Mongoose
// require('./Category');

// const itemSchema = new Schema({
//   img: {type: String},
//   name: { type: String, required: true },
//   rawemoji: { type: String },
//   favemoji: { type: String },
//   category: { type: Schema.Types.ObjectId, ref: 'Category' },
//   description: { type: String },
//   price: { type: Number, required: true, default: 0 }
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Item', itemSchema);

const mongoose = require("mongoose");
require("./Category");
const ItemSchema = require("./ItemSchema");
module.exports = mongoose.model("Item", ItemSchema);
