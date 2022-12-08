const { Router } = require('express');
const router = Router();

const serviciosController = require('../controllers/serviciosController');

router.get('/', serviciosController.getServices);
//router.post('/', serviciosController.createService);

module.exports = router;