const friends = require("../models/friends.model");

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "name not provided",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(friends);
}

function getFriendById(req, res) {
  const friend = friends[Number(req.params.id)];

  if (friend != null) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "friend not found",
    });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriendById,
};
