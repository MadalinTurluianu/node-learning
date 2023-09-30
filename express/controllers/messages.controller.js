function getMessages(req, res) {
  res.send("messages");
}

function postMessage(req, res) {
  res.send("updating messages");
}

module.exports = {
  getMessages,
  postMessage,
};
