const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        'status': 'OK'
    });
});

module.exports = router;