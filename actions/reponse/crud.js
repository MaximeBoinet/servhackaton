const mysql = require('mysql');

module.exports = (api) => {
  const con = mysql.createConnection({
  host: api.settings.db.url,
  user: api.settings.db.user,
  password: api.settings.db.password,
  database: api.settings.db.database
  });

  function create (req, res, next) {
    con.query("INSERT INTO Reponse (Question_idQuestion, Personne_idPersonne, Text, Status) VALUES ("+ req.body.idquestion +","+req.body.idpersonne+",'"+ req.body.text+"', 1)",
    (err, result, fields) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(result);
    })
  }

  function validate(req, res, next) {
    con.query("UPDATE Reponse SET Status = 2 WHERE idReponse ="+ req.body.id+"",
    (err, result, fields) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(result);
    })
  }

  function deleter(req, res, next) {
    con.query("DELETE FROM Reponse WHERE idReponse = "+ req.params.id+"",
    (err, result, fields) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(result);
    });
  }

  return {
    create,
    validate,
    deleter,
  };
}
