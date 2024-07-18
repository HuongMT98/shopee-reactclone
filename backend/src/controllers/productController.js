/* eslint-disable no-unused-vars */
import { Product, Shop } from "../model/model.js"

const productController = {
  //Add Product
  addProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body)
      await newProduct.save()
      res.status(200).json(newProduct)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
}

module.exports = productController
