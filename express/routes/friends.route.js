const friendsController = require("../controllers/friends.controller");

const express = require("express");

const friendsRouter = express.Router();

friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:id", friendsController.getFriendById);

module.exports = friendsRouter;
