const express = require("express");

const routes = express.Router();

const ClientsController = require("./app/controller/ClientsController")

// Clients routes
routes.get('/clients', ClientsController.getClients);
routes.post('/clients', ClientsController.addClient);
routes.put('/clients', ClientsController.updateClient);
routes.delete('/clients', ClientsController.deleteClient);

module.exports = routes;
