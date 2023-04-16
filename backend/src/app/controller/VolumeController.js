const db = require("../config/db");

class VolumeControler {
  getLashVolume(req, res) {
    const q = "SELECT * FROM lashVolume WHERE usr_id = ?";
    const values = [req.body.userId]

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json(data);
    });
  }

  addLashVolume(req, res) {
    const q = "INSERT INTO lashVolume(vol_name, usr_id) VALUES(?)";

    const values = [req.body.volumeName, req.body.userId];

    db.query(q, [values], (err) => {
      if (err) return res.json(err);

      return res.status(200).json("Usuário criado com sucesso.");
    });
  }

  updateLashVolume(req, res) {
    const q =
      "UPDATE lashVolume SET vol_name = ? WHERE vol_id = ?";
  
    const values = [
      req.body.volumeName,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  }

  restoreLashVolume(req, res) {
    const q =
      "UPDATE lashVolume SET vol_active = 1 WHERE vol_id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário restaurado com sucesso.");
    });
  }

  deleteLashVolume(req, res) {
    const q =
      "UPDATE lashVolume SET vol_active = 0 WHERE vol_id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário excluído com sucesso.");
    });
  }
}

module.exports = new VolumeControler();
