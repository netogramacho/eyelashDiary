const express = require("express");

const routes = express.Router();

const SizesController = require("../controller/SizesController");

routes.get('/', SizesController.getLashSize);
routes.post('/', SizesController.addLashSize);
routes.put('/:id', SizesController.updateLashSize);
routes.patch('/:id', SizesController.restoreLashSize);
routes.delete('/:id', SizesController.deleteLashSize);


module.exports = routes;