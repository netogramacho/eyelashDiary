const express = require("express");

const routes = express.Router();

const ClientsController = require("./app/controller/ClientsController")

// Clients routes
routes.get('/clients', ClientsController.getClients);
routes.post('/clients', ClientsController.addClient);
routes.put('/clients/:id', ClientsController.updateClient);
routes.patch('/clients/:id', ClientsController.restoreClient);
routes.delete('/clients/:id', ClientsController.deleteClient);

module.exports = routes;
