import Joi from "joi"

const createNew = async (req, res, next) => {
  const conditionProduct = Joi.object({
    name: Joi.string().required().min(3).max(255).trim().strict(),
    price: Joi.number().required(),
    selloff: Joi.string().default(0),
    image: Joi.string().required().trim().strict(),
  })

  try {
    console.log("POST PRODUCT API", req.body)
    await conditionProduct.validateAsync(req.body, { abortEarly: false })
  } catch (error) {
    next(error)
  }

  return next()
}

export const productValidation = {
  createNew,
}
