import mongoose from "mongoose"

//Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: [String],
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  sold: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
})

//Shop Schema
const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  product: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Product",
  },
})

let Product = mongoose.model("Product", productSchema)
let Shop = mongoose.model("Shop", shopSchema)

module.exports = { Product, Shop }
