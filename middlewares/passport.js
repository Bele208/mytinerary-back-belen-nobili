import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(
  "jwt",
  new Strategy(
    {jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),secretOrKey: process.env.SECRET_KEY,},
    async (jwt_payload, done) => {
      try {
        let user = await User.findOne({ mail: jwt_payload.mail },"-_id -__v -password");
        if (user) {
            console.log("Holis");
          return done(null, user); 
        } else {
            console.log("Holis 2");
          return done(null);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);