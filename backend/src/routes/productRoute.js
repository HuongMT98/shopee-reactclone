// Import controllers
import productController from "../controllers/productController.js"

const router = require("express").Router()

//Route routes

router.post("/", productController.addProduct)
