import joi from 'joi'

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': "Please, name must have at least 3 characters!",
        'string.max': "Please, name must be less than 21 characters!",
        'any.required': "Please, name is required!",
        'string.empty': "Please, name is required!"
    }),
    mail: joi.string().required(),
    password: joi.string().required(),
    country: joi.string().required(),
    lastName: joi.string().min(3).max(20).empty("").messages({
        'string.min': "Please, last name must have at least 3 characters!",
        'string.max': "Please, last name must be less than 21 characters!"
    })
})

export default registerSchema