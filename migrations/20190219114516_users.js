exports.up = knex =>
  knex.schema.createTable("users", users => {
    users.increments();

    // user's full name, optional for front-end to implement
    users.string("name", 128);
    // user's email address, must be unique, optional
    users.string("email", 128).unique();
    // user's profile picture, optional, image url
    users.string("profilePicURL", 128);
    // user's username, required, unique, max 30 characters
    users
      .string("username", 30)
      .notNullable()
      .unique();
    // user's password, required, max 128 characters
    users.string("password", 128).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists("users");