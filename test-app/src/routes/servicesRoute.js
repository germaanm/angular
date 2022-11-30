const { Router } = require('express');
const router = Router();

const servicios = require('./services.json');

router.get('/', (req, res) => {
    res.json(servicios);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    servicios.forEach(servicio => {
        if (servicio.id == id) {
            res.json(servicio);
        }
    })
});
module.exports = router;