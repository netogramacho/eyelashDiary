const express = require("express");

const routes = express.Router();

const VolumesController = require("../controller/VolumesController");

routes.get('/', VolumesController.getLashVolume);
routes.post('/', VolumesController.addLashVolume);
routes.put('/:id', VolumesController.updateLashVolume);
routes.patch('/:id', VolumesController.restoreLashVolume);
routes.delete('/:id', VolumesController.deleteLashVolume);


module.exports = routes;