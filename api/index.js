let jsonServer = require("json-server");
let db = require("./db.js");
let fs = require("fs");

let server = jsonServer.create();

fs.writeFileSync("/tmp/db.json", JSON.stringify(db()));

let router = jsonServer.router("/tmp/db.json");
let middleware = jsonServer.defaults();
let port = process.env.PORT || 5000;

server.use(middleware);
server.use(router);
server.listen(port, function () {
  console.log("JSON Server is running on http://localhost:" + port);
});
