const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "img.jpg"));
}

function postMessage(req, res) {
  res.send("updating messages");
}

module.exports = {
  getMessages,
  postMessage,
};
