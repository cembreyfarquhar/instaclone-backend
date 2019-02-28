const db = require("../../data/dbConfig.js");

function post(req, res) {
  const { imageURL, description, username } = req.body;
  // grabs imageURL and descrip from req

  try {
    // grabs id for user
    const userID = db("users")
      .where({ username: username })
      .first()
      .then(({ id }) => id);

    db("posts").insert({
      userID: userID,
      timeOfPost: Date.now(),
      imageURL: imageURL,
      likes: 0,
      description: description
    });
    res.status(200).json({ message: "Post added!" });
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = post;
