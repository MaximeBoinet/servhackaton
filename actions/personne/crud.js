const mysql = require('mysql');
const sha256 = require('sha256');

module.exports = (api) => {
  const con = mysql.createConnection({
  host: api.settings.db.url,
  user: api.settings.db.user,
  password: api.settings.db.password,
  database: api.settings.db.database
  });

  function exist(req, res, next) {
    con.query("SELECT * FROM Personne WHERE Mail = '"+ req.body.mail+
    "' AND Mdp = '"+ req.body.mdp +"'", (err, result, fields) => {
          if (err) {
            return res.status(500).send(err);
          }
          if (result.lenght() == 0) {
            return res.status(204).send("No data found");
          }
          return res.send(result);
    });
  }

  function getAllMatiere(req, res, next) {
    con.query("SELECT idMatiere,Date,Promo,Labelle "+
    "FROM Matiere,Matiere_has_Personne,Personne, "+
    "WHERE Matiere.idMatiere = Matiere_has_Personne.Matiere_idMatiere "+
    "AND Matiere_has_Personne.Personne_idPersonne = Personne.idPersonne "+
    "AND Personne.idPersonne = "+req.params.id+"", (err, result, fields) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (result.lenght() == 0) {
        return res.status(204).send("No data found");
      }
      return res.send(result);
    })
  }

  return {
    exist,
    getAllMatiere
  };
}
