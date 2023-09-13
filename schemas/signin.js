import joi from 'joi'

let signinSchema = joi.object({

    mail: joi.string().required().min(8).max(20).messages({
        'string.min': "Please, the mail must have at least 8 characters!",
        'string.max': "Please, the mail must be less than 21 characters!",
        'any.required': "Please, the mail is required!",
        'string.empty': "Please, the mail is required!"
    }),
    password: joi.string().required().min(8).max(20).alphanum().messages({
        'string.min': "Please, the password must have at least 8 characters!",
        'string.max': "Please, the password must be less than 21 characters!",
        'any.required': "Please, the password is required!",
        'string.empty': "Please, the password is required!"
    }),

})

export default signinSchema