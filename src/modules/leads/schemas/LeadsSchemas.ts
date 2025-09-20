import { celebrate, Joi, Segments } from "celebrate"

export const createLeadSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string()
  })
})

export const updateLeadSchema = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().integer().required()
  }),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required()
  })
})

export const idParamsValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required()
  }
})