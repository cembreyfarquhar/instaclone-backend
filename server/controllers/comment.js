const db = require("../../data/dbConfig.js");

function comment(req, res) {
  const { text, username, id } = req.body;
  // grabs comment text from req.body as well as username and postID

  try {
    // grabs id for user
    const userID = db("users")
      .where({ username: username })
      .first()
      .then(({ id }) => id);
    // grabs id for post
      const postID = db("posts")
      .where({ id: id })
      .first()
      .then(({ id }) => id);

    db("comments").insert({
      userID: userID,
      username: username,
      postID: postID,
      timeOfComment: Date.now(),
      text: text
    });
    res.status(200).json({ message: "Comment added!" });
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = comment;
