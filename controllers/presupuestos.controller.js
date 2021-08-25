const { creaPresupuestos, recuperaPresupuestos, eliminaPresupuestos, modificaPresupuestos } = require('../services/presupuestos.service');

exports.getPresupuestos = async (req,res)=>{
    try {
        const presupuesto = await recuperaPresupuestos()
        console.log(presupuesto)
        res.json(presupuesto) 
    } catch (error) {
        res.status(400).json('404', {msj: error.message , titulo: 'Error en la consulta'})
    }}

exports.postPresupuestos = async (req,res)=>{
    try {
        const presupuesto= await creaPresupuestos(req.body)
        res.json(presupuesto); 
    } catch (error) {
        res.status(400).json('404', {msj: error.message , titulo: 'Error al agregar el presupuesto'})
    }}

exports.updatePresupuesto = async (req,res)=>{
    try { 
        await modificaPresupuestos(req.body,req.params.productoId )
        res.json ({ success: 'Se ha modificado con éxito' })
    } catch (error) {
        res.status(400).json('404', {msj: error.message , titulo: 'Error al modificar los datos'})
    }
}

exports.deletePresupuesto = async (req,res)=>{
    try {
        await eliminaPresupuestos(req.params.presupuestoIdv)
        res.json ({ success: 'Se ha eliminado el registro con éxito' })
    } catch (error) {
        res.status(400).render('404', {msj: error.message , titulo: 'No se ha podido eliminar'})
    }}