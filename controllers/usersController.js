const usersModel = require("../models/usersModel");
const usersAdminModel = require("../models/usersAdminModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
module.exports = {
    createUser: async function(req, res, next) {

        console.log('este es el nombre' +req.body.name);
        let data = await usersModel.create({name: req.body.name,
                                            user: req.body.user,
                                            password: req.body.password,
                                            email: req.body.email,
                                            gender: req.body.gender,
                                            role: req.body.role
                                                });

        res.status(201).json(data);     
    },
    createUserAdmin: async function(req, res, next){
        console.log('este es el nombre' +req.body.name);
        let data = await usersAdminModel.create({name:req.body.name,
                                                user: req.body.user,
                                                password: req.body.password,
                                                email: req.body.email,
                                                gender: req.body.gender,
                                                role: req.body.role,
                                                company: req.body.company
                                            });
        res.status(201).json(data); 
    },
    loginUser: async function(req, res, next){
        //consulto por usuario
        
        let user= await usersModel.findOne({user: req.body.user});
        console.log("entro acá");
        if(user){
            //valido el password
            if(bcrypt.compareSync(req.body.password, user.password)){
                //password valido, genero token
              const token=  jwt.sign({user: user},req.app.get('secretKey'),{expiresIn: '1h'});
                console.log(token);
                res.json({token: token});
            }else{
                res.json({message: "password incorrecto", data: null});
            }
            
        }else{
            //arrojo el error 
            res.json({message: "user noot found", data:  null})
        }


    },
    loginUserAdmin: async function(req, res, next){
        //consulto por usuario
        console.log("login con admin ");
        let user= await usersAdminModel.findOne({user: req.body.user});
        console.log("entro acá");
        if(user){
            //valido el password
            if(bcrypt.compareSync(req.body.password, user.password)){
                //password valido, genero token
              const token=  jwt.sign({user: user},req.app.get('secretKey'),{expiresIn: '1h'});
                console.log(token);
                res.json({token: token});
            }else{
                res.json({message: "password incorrecto", data: null});
            }
            
        }else{
            //arrojo el error 
            res.json({message: "user noot found", data:  null})
        }


    }
}