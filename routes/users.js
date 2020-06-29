const express = require('express');
const router = express.Router();
const mainController = require("../controllers/usersController");
/* GET users listing. */
router.post('/login-client', mainController.loginUser)
router.post('/login-admin', mainController.loginUserAdmin);
router.post('/register-client', mainController.createUser);
router.post('/register-admin', mainController.createUserAdmin);


module.exports = router;
