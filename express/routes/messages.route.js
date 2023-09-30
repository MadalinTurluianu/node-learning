const messagesController = require("../controllers/messages.controller");

const express = require("express");

const messagesRouter = express.Router();

messagesRouter.get("/", messagesController.getMessages);
messagesRouter.post("/", messagesController.postMessage);

module.exports = messagesRouter;
