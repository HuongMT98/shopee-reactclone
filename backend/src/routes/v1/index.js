import express from "express"
import { productRoutes } from "./productRouter.js"

const Router = express.Router()

//API Product
Router.use("/product", productRoutes)

export default Router
