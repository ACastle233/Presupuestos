
const router = require('express').Router();
const midd = require('../../middlewares/midd.presupuesto')
const presupuestoController = require("../../controllers/presupuestos.controller")

router.get('/', presupuestoController.getPresupuestos);

router.post('/', midd.checkPresupuestoAlta, presupuestoController.postPresupuestos);

router.put('/:presupuestoId',presupuestoController.updatePresupuesto);
    
router.delete('/:presupuestoId', presupuestoController.deletePresupuesto);

module.exports = router;