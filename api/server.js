const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const instructorRouter = require('./instructor/instructor-router');
const clientRouter = require('./client/clients-router');
const authRouter = require('./auth/auth-router');
const classRouter = require('./classes/classes-router');
const locationRouter = require('./location/location-router');
const clientclassRouter = require('./clients_classes/clients_classes-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use("/api/instructors", instructorRouter);
server.use("/api/clients", clientRouter);
server.use("/api/auth", authRouter);
server.use("/api/classes", classRouter);
server.use("/api/locations", locationRouter);
server.use("/api/attending", clientclassRouter);

module.exports = server;