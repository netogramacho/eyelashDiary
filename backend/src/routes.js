const express = require("express");

const routes = express.Router();

const ClientsController = require("./app/controller/ClientsController");
const WeightController = require("./app/controller/WeightController");
const VolumeController = require("./app/controller/VolumeController");
const SizeController = require("./app/controller/SizeController");
const MappingController = require("./app/controller/MappingController");
const CurveController = require("./app/controller/CurveController");

// Clients routes
routes.get('/clients', ClientsController.getClients);
routes.post('/clients', ClientsController.addClient);
routes.put('/clients/:id', ClientsController.updateClient);
routes.patch('/clients/:id', ClientsController.restoreClient);
routes.delete('/clients/:id', ClientsController.deleteClient);

// Weight routes
routes.get('/weight', WeightController.getLashWeight);
routes.post('/weight', WeightController.addLashWeight);
routes.put('/weight/:id', WeightController.updateLashWeight);
routes.patch('/weight/:id', WeightController.restoreLashWeight);
routes.delete('/weight/:id', WeightController.deleteLashWeight);

// Volume routes
routes.get('/volume', VolumeController.getLashVolume);
routes.post('/volume', VolumeController.addLashVolume);
routes.put('/volume/:id', VolumeController.updateLashVolume);
routes.patch('/volume/:id', VolumeController.restoreLashVolume);
routes.delete('/volume/:id', VolumeController.deleteLashVolume);

// Size routes
routes.get('/size', SizeController.getLashSize);
routes.post('/size', SizeController.addLashSize);
routes.put('/size/:id', SizeController.updateLashSize);
routes.patch('/size/:id', SizeController.restoreLashSize);
routes.delete('/size/:id', SizeController.deleteLashSize);

// Weight routes
routes.get('/mapping', MappingController.getLashMapping);
routes.post('/mapping', MappingController.addLashMapping);
routes.put('/mapping/:id', MappingController.updateLashMapping);
routes.patch('/mapping/:id', MappingController.restoreLashMapping);
routes.delete('/mapping/:id', MappingController.deleteLashMapping);

// Weight routes
routes.get('/curve', CurveController.getLashCurve);
routes.post('/curve', CurveController.addLashCurve);
routes.put('/curve/:id', CurveController.updateLashCurve);
routes.patch('/curve/:id', CurveController.restoreLashCurve);
routes.delete('/curve/:id', CurveController.deleteLashCurve);


module.exports = routes;
    