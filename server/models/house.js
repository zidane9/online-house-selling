'use strict'

const mongoose = require('mongoose');
const mongooseStamp = require('mongoose-stamp');
let Schema = mongoose.Schema;

//create a Schema
let houseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  owner: String,
  phone: String,
  address: String,
  location: {
    lat: Number,
    lon: Number
  }

});

//the schema is useless so far
//we need to create a model using it
houseSchema.plugin(mongooseStamp);
let House = mongoose.model('House', houseSchema);

//make this available to our users in our Node Applications
module.exports = House;
