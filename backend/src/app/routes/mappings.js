const express = require("express");

const routes = express.Router();

const MappingsController = require("../controller/MappingsController");

routes.get('/:id?', MappingsController.getLashMapping);
routes.post('/', MappingsController.addLashMapping);
routes.put('/:id', MappingsController.updateLashMapping);
routes.patch('/:id', MappingsController.restoreLashMapping);
routes.delete('/:id', MappingsController.deleteLashMapping);


module.exports = routes;