const express = require("express");
const friendsRouter = require("./routes/friends.route");
const messagesRouter = require("./routes/messages.route");

const PORT = 3000;

const app = express();
app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => `listening port: ${PORT}`);
