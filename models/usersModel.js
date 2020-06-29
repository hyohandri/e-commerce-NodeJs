const mongoose = require('../bin/mongodb');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const MainSchema = new Schema({
    name:{
        type: String,
        trim: true
    },
    user:{
        type: String,
        
        
    },
    password:{
        type: String,
        
    },
    email:{
        type: String,
        
       
    },
    gender:{
        type: String,
        
        
        },
    role:{
            type: String,
            
            unique: false
        }
});

MainSchema.pre('save', function(next){
    this.password= bcrypt.hashSync(this.password, 10);
    next();
});

module.exports = mongoose.model('users', MainSchema);
