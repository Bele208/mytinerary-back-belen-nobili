import { response } from "express";
import User from "../../models/User.js";

export default async (req, res)=>{
    try {
        let oneUser = await User.findOne({_id:req.params.user_id}).select("mail photo -_id")
        return res.status(200).json({
            success: true,
            message: 'Users found',
            response: oneUser
        })
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Users not found',
            response: null
        })
        
    }
}


