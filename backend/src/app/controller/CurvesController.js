const CurvesModel = require("../model/CurvesModel");

class CurvesControler {
  async getLashCurve(req, res) {
    let userId = req.body.userId;
    let curveId = req.params.id;

    if (req.params.id) {
      return res.status(200).json(await CurvesModel.findOne(userId, curveId));
    } else {
      return res.status(200).json(await CurvesModel.findAll(userId));
    }
  }

  async addLashCurve(req, res) {
    let curveValue = req.body.curveValue;
    let userId = req.body.userId;

    if (!curveValue || curveValue === "") {
      return res.status(400).json("Bad Request");
    }

    res.status(200).json(await CurvesModel.create(curveValue, userId));
  }

  async updateLashCurve(req, res) {
    let curveValue = req.body.curveValue;
    let curveId = req.params.id;

    if (!curveValue || curveValue === "") {
      return res.status(400).json("Bad Request");
    }

    res.status(200).json(await CurvesModel.update(curveValue, curveId));
  }

  async restoreLashCurve(req, res) {
    let curveId = req.params.id;

    res.status(200).json(await CurvesModel.restore(curveId));
  }

  async deleteLashCurve(req, res) {
    let curveId = req.params.id;

    res.status(200).json(await CurvesModel.delete(curveId));
  }
}

module.exports = new CurvesControler();
