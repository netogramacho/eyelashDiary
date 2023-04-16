const db = require("../config/db");

class MappingControler {
  getLashMapping(req, res) {
    const q = "SELECT * FROM lashMapping WHERE usr_id = ?";
    const values = [req.body.userId]

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json(data);
    });
  }

  addLashMapping(req, res) {
    const q = "INSERT INTO lashMapping(map_name, usr_id) VALUES(?)";

    const values = [req.body.mappingName, req.body.userId];

    db.query(q, [values], (err) => {
      if (err) return res.json(err);

      return res.status(200).json("Usuário criado com sucesso.");
    });
  }

  updateLashMapping(req, res) {
    const q =
      "UPDATE lashMapping SET map_name = ? WHERE map_id = ?";
  
    const values = [
      req.body.mappingName,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  }

  restoreLashMapping(req, res) {
    const q =
      "UPDATE lashMapping SET map_active = 1 WHERE map_id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário restaurado com sucesso.");
    });
  }

  deleteLashMapping(req, res) {
    const q =
      "UPDATE lashMapping SET map_active = 0 WHERE map_id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário excluído com sucesso.");
    });
  }
}

module.exports = new MappingControler();
