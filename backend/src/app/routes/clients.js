const express = require("express");

const routes = express.Router();

const ClientsController = require("../controller/ClientsController");

routes.get('/:id?', ClientsController.getClients);
routes.post('/', ClientsController.addClient);
routes.put('/:id', ClientsController.updateClient);
routes.patch('/:id', ClientsController.restoreClient);
routes.delete('/:id', ClientsController.deleteClient);


module.exports = routes;