var express = require('express');
var router = express.Router();

var productsController = require("../controllers/productsController")

/* GET,POST;PUT products page. */
router.get('/', productsController.getAll);
router.get('/featured', productsController.getFeatured);
router.get('/:id', productsController.getById);
router.post('/create', productsController.create);
//router.put('/:id', productsController.update);

module.exports = router;
