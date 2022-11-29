const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const data = {
        "name": "Mauricio Nuñez",
        "id": "1234"
    }
    res.json(data);
});

module.exports = router;