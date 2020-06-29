const mongoose = require('../bin/mongodb');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const MainSchema = new Schema({
    name:{
        type: String,
        trim: true,
        
    },
    user:{
        type: String,
       required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
       
    },    
    gender:{
        type: String,
        required:true,
        },
        role:{
            type: String,
        },
        company:{
            type: String
        }
});
MainSchema.pre('save', function(next){
    this.password= bcrypt.hashSync(this.password, 10);
    next();
});
module.exports = mongoose.model('usersadmins', MainSchema);
