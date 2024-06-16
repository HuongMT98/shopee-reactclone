/* eslint-disable no-unused-vars */
import express from "express"
import { StatusCodes } from "http-status-codes"
import { productValidation } from "../../validations/productValidation.js"

const Router = express.Router()

Router.route("/")
  .get((req, res, next) => {
    res.status(StatusCodes.OK).json({
      message: "Đây là API GET product",
    })
  })
  .post(productValidation.createNew)

export const productRoutes = Router
