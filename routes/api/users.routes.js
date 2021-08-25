const router = require("express").Router();
const midd = require('../../middlewares/midd.users')
const userController = require('../../controllers/users.controller')

router.post("/register", midd.checkDatosAlta, userController.register);

router.post("/login", userController.login);

router.put("/changePass", userController.changePass);

module.exports = router;
