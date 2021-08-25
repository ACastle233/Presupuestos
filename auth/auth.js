const jwt = require('jsonwebtoken')

module.exports.generaTokenJWT = async (data) => {
    const resultado = jwt.sign({
        data} , process.env.SECRET_KEY 
    )
    return resultado
}