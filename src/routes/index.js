var express = require('express');
var router  = express.Router();

router.get('/', function(req, res, next) {
    res.send('Bienvenido a la API de Carolina');
});

module.exports = router;
