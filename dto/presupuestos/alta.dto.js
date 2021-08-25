const Joi = require('joi');

module.exports.altaPresupuestoDTO = Joi.object().keys({
    proyecto: Joi.string().alphanum().required(),
    version: Joi.string().alphanum().required()
});