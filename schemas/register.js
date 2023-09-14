import joi from 'joi'

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': "Please, name must have at least 3 characters!",
        'string.max': "Please, name must be less than 21 characters!",
        'any.required': "Please, name is required!",
        'string.empty': "Please, name is required!"
    }),
    lastName: joi.string().min(3).max(20).empty("").messages({
        'string.min': "Please, last name must have at least 3 characters!",
        'string.max': "Please, last name must be less than 21 characters!"
    }),
    mail: joi.string().required().min(6).max(30).email().messages({
        'string.min': "Please, mail must have at least 6 characters!",
        'string.max': "Please, mail must be less than 31 characters!"
    }),
    password: joi.string().alphanum().required().min(8).max(20).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({
        'string.min': "Please, password must have at least 8 characters!",
        'string.max': "Please, password must be less than 21 characters!"
    }),
    photo: joi.string().required(),
    country: joi.string().required(),

})

export default registerSchema