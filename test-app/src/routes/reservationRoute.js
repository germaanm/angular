const { Router } = require('express');
const router = Router();

const reservas = require('./reservations.json');
const reservacionesController = require('../controllers/reservacionesController')

router.get('/', reservacionesController.getReservations);

router.get('/:IdReserva', reservacionesController.getReservation);

router.delete('/:IdReserva', reservacionesController.deleteReservation);

router.post('/', reservacionesController.createReservation);

router.put('/:IdReserva', reservacionesController.updateReservation);

module.exports = router;