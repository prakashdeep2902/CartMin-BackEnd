const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
 
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true, 
    }
   
  });

  module.exports = mongoose.model('products', ProductSchema);