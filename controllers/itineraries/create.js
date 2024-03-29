import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) =>{
    try {
        let data = req.body
        let one = await Itinerary.create(data)
        return res.status(201).json({
            success: true,
            message: 'itinerary created',
            Response: one._id
        })
    } catch (error) {
        next(error)  
    }
}