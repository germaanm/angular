const serviciosController = {}
const servicio = require('../models/servicios')

serviciosController.getServices = async(req, res) => {
        const servicios = await servicio.find()
        res.json(servicios)
    }
    /*serviciosController.createService = async(req, res) => {
        const newService = new servicio(req.body);
        await newService.save();
        //console.log(newReservation);
        res.send({ message: 'Servicio creada' })
    }*/
module.exports = serviciosController;