const bcrypt = require("bcryptjs");
const db = require("../../data/dbConfig.js");

function register(req, res) {
  const password = req.body.password;

  const hash = bcrypt.hashSync(password, 4)
  db("users")
    .insert({ ...req.body, password: hash })
    .then(id => res.status(201).json(id))
    .catch(err => res.status(401).json(err));
}

module.exports = register;
