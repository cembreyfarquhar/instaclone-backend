const bcrypt = require("bcryptjs");
const db = require("../../data/dbConfig.js");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

function generateToken({ username }) {
  const paylod = { username };
  const options = { expiersIn: "1d" };

  return jwt.sign(payload, jwtSecret, options);
}

function login(req, res) {
  const { username, password } = req.body;

  db("users")
    .where({ username })
    .first()
    .then(user => {
      if (bcrypt.compareSync(password, user.password)) {
        const token = generateToken({ username });
        res.status(200).json({ token: token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(err => res.status(500).json(err));
}

module.exports = login;
