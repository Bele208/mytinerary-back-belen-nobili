import City from "../../models/City.js";

export default async (req, res, next) => {
    try {
        let objetoDeBusqueda = {}
        let objetoDeOrden = {}
        if (req.query.admin_id){
            objetoDeBusqueda.admin_id = req.query.admin_id
        }
        if (req.query.city){
        let filterCity = req.query.city.trim();
            objetoDeBusqueda.city = new RegExp(req.query.city, 'i')
            objetoDeBusqueda.city = { $regex: `^${filterCity}`, $options: "i" };
        }
        if (req.query.sort){
            objetoDeOrden.city = req.query.sort
        }
        let allCities = await City.find(objetoDeBusqueda, 'country city photo smalldescription admin_id').populate('admin_id', 'photo name mail -_id').sort(objetoDeOrden)

        if (allCities.length>0) {
            return res.status(200).json({
                success: true,
                message: 'cities found',
                response: allCities
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}

