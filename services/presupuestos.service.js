const { Presupuesto }= require('../db/connection');

module.exports.creaPresupuestos = async(presupuesto)=>{
    try {  
        const resultado= await Presupuesto.create(presupuesto);
        return resultado;
    } catch (error) {
        throw new  Error(error)
    }
}

module.exports.eliminaPresupuestos = async(id) => {
    try {  
        await Presupuesto.destroy({
            where:{idPresupuesto: id }
        });
    } catch (error) {
        throw new  Error(error)
    }
}

module.exports.recuperaPresupuestos = async(id) => {
    try {  
        const resultado= await Presupuesto.findAll();// recupera todos los registros de la tabla, regresa una promesa
        return resultado;
    } catch (error) {
        throw new  Error(error)
    }
}

module.exports.modificaPresupuestos = async(presupuesto,id) => {
    try {  
        await Presupuesto.update(presupuesto,{
            where:{idPresupuesto: id}
        });
    } catch (error) {
        throw new  Error(error)
    }
}