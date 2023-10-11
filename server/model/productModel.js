const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  products: [
    {
      productName: String,
      size: String,
      priceInIndia: Number,
      priceEverywhereElse: Number,
      quantity: Number,
      color: String,
    }
  ]
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
