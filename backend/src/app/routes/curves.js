const express = require("express");

const routes = express.Router();

const CurvesController = require("../controller/CurvesController");

routes.get('/:id?', CurvesController.getLashCurve);
routes.post('/', CurvesController.addLashCurve);
routes.put('/:id', CurvesController.updateLashCurve);
routes.patch('/:id', CurvesController.restoreLashCurve);
routes.delete('/:id', CurvesController.deleteLashCurve);


module.exports = routes;