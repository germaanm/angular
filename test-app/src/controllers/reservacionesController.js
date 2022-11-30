const reservacionesController = {}
const reservacion = require('../models/reservaciones.js')

reservacionesController.getReservations = async(req, res) => {
    const reservas = await reservacion.find()
    res.json(reservas)
}

reservacionesController.createReservation = async(req, res) => {
    const newReservation = new reservacion(req.body);
    await newReservation.save();
    //console.log(newReservation);
    res.send({ message: 'reservación creada' })
}

reservacionesController.getReservation = async(req, res) => {
    //console.log(req.params)
    const findReservation = await reservacion.findById(req.params.IdReserva)
    res.send(findReservation)
}
reservacionesController.deleteReservation = async(req, res) => {
    const findReservation = await reservacion.findByIdAndDelete(req.params.IdReserva)
    res.send({ message: 'Reservación eliminada', findReservation })
}

reservacionesController.updateReservation = async(req, res) => {
    const findReservation = await reservacion.findByIdAndUpdate(req.params.IdReserva, req.body)
    res.send({ message: 'Reservación modificada', findReservation })
}
module.exports = reservacionesController;