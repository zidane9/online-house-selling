'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/houseController');

  router.get('/', controller.getAll)

  .get('/:id', controller.getOne)

  .post('/', controller.createOne)

  .put('/:id', controller.update)

  .delete('/:id', controller.deleteOne)

module.exports = router;
