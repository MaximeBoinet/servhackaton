const mysql = require('mysql');

module.exports = (api) => {
  const con = mysql.createConnection({
  host: api.settings.db.url,
  user: api.settings.db.user,
  password: api.settings.db.password,
  database: api.settings.db.database
  });

  function create(req, res, next) {
    con.query("INSERT INTO Matiere (Date,Promo,Labelle) VALUES ("+req.body.date+",'"+req.body.promo+"','"+req.body.labelle+"')",
      (err, result, fields) => {
        if (err) {
          return res.status(500).send(err);
        }

        return res.send(result);
      })
  }

  function getAllCours(req, res, next) {
    con.query("SELECT * FROM Cours WHERE Matiere_idMatiere ="+req.params.id+"",
      (err, result, fields) => {
        if (err) {
          return res.status(500).send(err);
        }

        if (!result || result.length == 0) {
          return res.status(204).send("No data found");
        }
        
        return res.send(result);
      })
  }

  return {
    create,
    getAllCours
  };
}
