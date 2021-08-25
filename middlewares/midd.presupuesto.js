

const rateLimit = require("express-rate-limit");
const Joi = require('joi');
const { altaPresupuestoDTO } = require('../dto/presupuestos/alta.dto');

module.exports.limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 100 requests per windowMs
    message: 'Usted exedió el limite de accesos a la API'
  });


module.exports.checkPresupuestoAlta = async(req, res, next) => {
    try {
        await Joi.attempt(req.body, altaPresupuestoDTO, "Los datos enviados no son correctos");
        return next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}