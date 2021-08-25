
const router = require('express').Router();
const presupuestoController = require("../../controllers/presupuestos.controller")

router.get('/', presupuestoController.getPresupuestos);

router.post('/', presupuestoController.postPresupuestos);

router.put('/:presupuestoId',presupuestoController.updatePresupuesto);
    
router.delete('/:presupuestoId', presupuestoController.deletePresupuesto);

module.exports = router;