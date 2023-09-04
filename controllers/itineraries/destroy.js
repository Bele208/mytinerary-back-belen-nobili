import Itinerary from "../../models/Itinerary.js";

export default async(req, res, next) =>{
    try {
        let { id } = req.params
        let one = await Itinerary.findByIdAndDelete(id)
        // Armar luego el condicional
        return res.status(200).json({
            success: true,
            message: 'itinerary deleted',
            Response: one._id
        })
    } catch (error) {
        next(error)
    }
}