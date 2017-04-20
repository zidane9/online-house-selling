'use strict'

const House = require('../models/house');

let getAll = function (req, res, next) {
  House.find()
  .exec(function (err, houses) {
    if (err) return res.send(err);
    res.send(houses);
  })
};

let getOne = function (req, res, next) {
  House.findOne({_id: req.params.id})
  .exec(function (err, house){
    if(err){
      res.json({error: err});
    } else {
      res.json(house);
    }
  })
};

let createOne = function (req, res, next) {
  House.create({
    title : req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    owner: req.body.owner,
    phone: req.body.phone,
    address: req.body.address
  }, function (error, house){
    if(error) res.send(error);
    res.send(house);
  })
};

let update = function (req, res, next) {
  House.findOne({_id: req.params.id}, function (err, house) {
  if (err) res.send(err);
  else if(!house) res.send({errors: 'House not found'})
  else {
    if(req.body.title) house.title = req.body.title;
    if(req.body.description) house.description = req.body.description;
    if(req.body.price) house.price = req.body.price;
    if(req.body.image) house.image = req.body.image;
    if(req.body.owner) house.owner = req.body.owner;
    if(req.body.phone) house.phone = req.body.phone
    if(req.body.address) house.address = req.body.address;
    house.save(function (err, updatedHouse) {
      if (err) res.send(err);
      else res.send(updatedHouse);
    });
  }
  });
};


let deleteOne = function (req, res, next) {
  House.findOne({_id: req.params.id})
  .remove(function(err, respond){
    if(err) res.send(err);
    else res.send(respond);
  })
};


module.exports = {
  getAll,
  getOne,
  createOne,
  update,
  deleteOne
}
