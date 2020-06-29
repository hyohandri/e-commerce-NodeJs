const mongoose = require("../bin/mongodb");
const Schema= mongoose.Schema;

const mainSchema= new Schema({
    name:{
        type: String,
        trim: true,
        index: true
    },
    sku: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        trim: true,
        min:0,
        required: [true,'Campo precio es obligatorio']
    },
    quantity:{
        type: Number,
        trim: true
    }
});

module.exports = mongoose.model('products',mainSchema);
    