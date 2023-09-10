import { Router } from "express";
// revisar
import passport from "../middlewares/passport.js";
// import passport from "passport";
// revisar

import token from "../controllers/auth/token.js";
import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";
import isValidPass from "../middlewares/isValidPass.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isPassOkey from "../middlewares/isPassOkey.js";
import isValidToken from "../middlewares/isValidToken.js";

import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";

let authRouter = Router()

authRouter.post('/register', validator(registerSchema), existsUser, isValidPass , register)

authRouter.post('/signin', validator(signinSchema), notExistsUser, isPassOkey, isValidToken, signin)

authRouter.post('/token', passport.authenticate('jwt',{session:false}), isValidToken, token)

export default authRouter
