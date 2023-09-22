const http = require("http");

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Madalin",
  },
  {
    id: 1,
    name: "Emi",
  },
];

const server = http.createServer((req, res) => {
  const urlPath = req.url.split("/");
  if (urlPath.length === 3 && urlPath[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(friends[urlPath[2]]));
  } else if (urlPath[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(friends));
  } else if (req.url === "message") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.write("<p>Madalin</p>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`listening at port: ${PORT}`);
});
