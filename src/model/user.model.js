const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   name:{
    type:String,
   },
   phone:{
    type:Number
   }

},{timestamps:true})

module.exports = mongoose.model('newuser',userSchema)