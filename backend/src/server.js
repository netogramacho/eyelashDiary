const express = require("express");
const clientsRoutes = require("./app/routes/clients");
const curvesRoutes = require("./app/routes/curves");
const mappingRoutes = require("./app/routes/mappings");
const sizesRoutes = require("./app/routes/sizes");
const volumesRoutes = require("./app/routes/volumes");
const weightsRoutes = require("./app/routes/weights");

class App {
  constructor() {
    this.express = express();
    this.setMiddlewares();
    this.setRoutes();
  }

  setMiddlewares() {
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(express.json());
  }

  setRoutes() {
    const routes = [
      { path: "/clients", controller: clientsRoutes },
      { path: "/curves", controller: curvesRoutes },
      { path: "/mappings", controller: mappingRoutes },
      { path: "/sizes", controller: sizesRoutes },
      { path: "/volumes", controller: volumesRoutes },
      { path: "/weights", controller: weightsRoutes },
    ];
    
    routes.forEach(route => {
      this.express.use(route.path, route.controller);
    });
  }
}

module.exports = new App().express;
