const productsModel = require("../models/productsModel")
//modules
module.exports = {
    getAll: async function(req, res, next) {
        let products = await productsModel.find({});
        console.log(products);
        res.status(200).json(products);
      },
    
    getFeatured: async function(req, res, next) {
        let products = await productsModel.find({'destacados': 1});
        console.log(products)
        res.status(200).json(products)
    },
    getById: async function(req, res, next) {
        console.log(req.params.id)
        let products = await productsModel.findById(req.params.id);
        console.log(products)
        res.status(200).json(products)
    },
    create: async function(req, res, next) {
        let product= new productsModel({
            name: req.body.name,
            sku: req.body.sku,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity
        });
        console.log(req.body.name);
        console.log(product);
        let data= await product.save();
        res.status(201).json({"stauts":"ok", "data": data});
        
    }  
}