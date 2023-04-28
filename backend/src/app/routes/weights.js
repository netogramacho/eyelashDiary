const express = require("express");

const routes = express.Router();

const WeightsController = require("../controller/WeightsController");

routes.get('/', WeightsController.getLashWeight);
routes.post('/', WeightsController.addLashWeight);
routes.put('/:id', WeightsController.updateLashWeight);
routes.patch('/:id', WeightsController.restoreLashWeight);
routes.delete('/:id', WeightsController.deleteLashWeight);


module.exports = routes;