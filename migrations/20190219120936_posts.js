exports.up = knex =>
  knex.schema.createTable("posts", users => {
    posts.increments();

    // userID associated with post, not nullable
    posts
      .integer("userID")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");

    // post timestamp, when it was created
    posts.timestamp();

    // post image URL, max 128 char
    posts.string("imageURL", 128).notNullable();

    // # of likes on a post, defaults to 0
    posts.integer("likes", 128).defaultTo(0);

    // short description underneath post
    posts.string("description", 128);

    // posts.array();
  });

exports.down = knex => knex.schema.dropTableIfExists("users");
