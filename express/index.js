const express = require("express");

const app = express();

const PORT = 3000;

const friends = [{ id: 0, name: "f1" }];

app.use(express.json());

app.post("/friends", (req, res) => {
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
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:id", (req, res) => {
  const friend = friends[Number(req.params.id)];

  if (friend != null) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "friend not found",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("messages");
});

app.listen(PORT, () => `listening port: ${PORT}`);
