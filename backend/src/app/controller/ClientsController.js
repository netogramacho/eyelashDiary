const ClientsModel = require("../model/ClientsModel");
class ClientsControler {
  async getClients(req, res) {
    let userId = req.body.userId;
    let clientId = req.params.id;

    if (req.params.id) {
      return res.status(200).json(await ClientsModel.findOne(userId, clientId));
    } else {
      return res.status(200).json(await ClientsModel.findAll(userId));
    }
  }

  async addClient(req, res) {
    let clientName = req.body.name;
    let clientPhone = req.body.phone;
    let userId = req.body.userId;

    if (!clientName || clientName === "") {
      return res.status(400).json("Bad request.");
    }

    return res
      .status(200)
      .json(await ClientsModel.create(clientName, clientPhone, userId));
  }

  async updateClient(req, res) {
    let clientName = req.body.name;
    let clientPhone = req.body.phone;
    let clientId = req.params.id;

    if (!clientName || clientName === "") {
      return res.status(400).json("Bad request.");
    }

    return res
      .status(200)
      .json(await ClientsModel.update(clientName, clientPhone, clientId));
  }

  async restoreClient(req, res) {
    let clientId = req.params.id;

    return res.status(200).json(await ClientsModel.restore(clientId));
  }

  async deleteClient(req, res) {
    let clientId = req.params.id;

    return res.status(200).json(await ClientsModel.delete(clientId));
  }
}

module.exports = new ClientsControler();
