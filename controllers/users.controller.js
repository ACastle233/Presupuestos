const { Usuario } = require("../db/connection");
const usuariosService = require("../services/users.service");
const midd = require('../middlewares/midd.users')
const bcrypt = require("bcryptjs");

exports.login = async (req,res) =>{
    try {
        const user = await Usuario.findOne({ where: { email: req.body.email } });
        console.log(user)
        if (user) {
          
          const iguales = bcrypt.compareSync(req.body.password, user.password);
          if (iguales) {
            let token = await usuariosService.generaToken({user: req.body.email, id: user.id});
            res.json({usuario:user,token:token});
          } else {
            res.json("Usuario o contraseña no coinciden");
          }
        } else {
            res.json("Usuario o contraseña no coinciden");
        }
        
      } catch (error) {
        res
          .status(400)
          .json("404", {
            msj: error,
            titulo: "Error al realizar su registro",
          });
      }
    
}

exports.register = async (req, res) => {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, 10); // aqui nos pasa la contraseña ya encriptada
      const user = await Usuario.create(req.body);
      res.json(user);
    } catch (error) {
      res
        .status(400)
        .render("404", {
          msj: error.message,
          titulo: "Error al realizar su registro",
        });
    }
  }

exports.changePass = async (req, res) => {
    try {
      const user = await Usuario.findOne({ where: { email: req.body.email } });
      console.log(req.body.email)
      if (user) {
        user.password = bcrypt.hashSync(req.body.password, 10);
        await user.save();
        res.json(user);
      } else {
          res.json("Usuario no encontrado");
      }
      
    } catch (error) {
      res
        .status(400)
        .render("404", {
          msj: error.message,
          titulo: "Error al realizar su registro",
        });
    }
  }