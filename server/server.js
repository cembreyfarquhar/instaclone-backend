const express = require('express');

const configureMiddleware = require('./config/middleware.js');

require('dotenv').config() 

const server = express()

configureMiddleware(server)

server.post('/register', register)
server.post('/login', login)
server.post('/post', post)