exports.up = knex =>
  knex.schema.createTable("comments", comments => {
    comments.increments();

    // userID associated with comment, not nullable
    comments
      .integer("userID")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");

    // username of commentor
    comments.string("username", 128);

    // postID associated with comment, not nullable
    comments
      .integer("postID")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("posts");

    // comment timestamp, when it was created
    comments.timestamp("timeOfComment");

    // text of comment
    comments.string("text", 128);
  });

exports.down = knex => knex.schema.dropTableIfExists("comments");
