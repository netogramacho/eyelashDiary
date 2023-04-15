const db = require("../config/db");

class ClientsControler {
  getClients(req, res) {
    const q = "SELECT * FROM clients";
    db.query(q, (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json(data);
    });
  }

  addClient(req, res) {
    const q = "INSERT INTO clients(cli_name, cli_phone, usr_id) VALUES(?)";

    const values = [req.body.name, req.body.phone, req.body.userId];

    db.query(q, [values], (err) => {
      if (err) return res.json(err);

      return res.status(200).json("Usuário criado com sucesso.");
    });
  }

  updateClient(req, res) {
    const q =
      "UPDATE clients SET cli_name = ?, cli_phone = ? WHERE cli_id = ?";
  
    const values = [
      req.body.name,
      req.body.phone,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  }

  restoreClient(req, res) {
    const q =
      "UPDATE clients SET cli_active = 1 WHERE cli_id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário restaurado com sucesso.");
    });
  }

  deleteClient(req, res) {
    const q =
      "UPDATE clients SET cli_active = 0 WHERE cli_id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário excluído com sucesso.");
    });
  }
}

module.exports = new ClientsControler();
