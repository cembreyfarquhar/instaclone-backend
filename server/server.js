const express = require("express");

const configureMiddleware = require("./config/middleware.js");
// const {
//   register,
//   login,
//   verifySession,
//   post,
//   getFeed,
//   like,
//   comment
// } = require("./controllers");

const register = require('./controllers/register.js');
const login = require('./controllers/login.js');
const verifySession = require('./controllers/verifySession.js');
const post = require('./controllers/post.js');
const getFeed = require('./controllers/getFeed.js');
const like = require('./controllers/like.js');
const comment = require('./controllers/comment.js');

require("dotenv").config();

const server = express();

configureMiddleware(server);

server.post("/register", register);
server.post("/login", login);
// server.post("/post", verifySession, post);
// server.get("/getFeed", verifySession, getFeed);
// server.post("/like/:id", verifySession, like);
// server.post("/comment/:id", verifySession, comment);

module.exports = server;
