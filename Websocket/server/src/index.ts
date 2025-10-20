import WebSocket, { WebSocketServer } from "ws";
import http from "http";

const server = http.createServer(function (request: any, response: any) {
  console.log(new Date() + "recieved request for " + request.url);
  response.end("Hii there");
});

const wss = new WebSocketServer({ server });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);
  ws.on("message", function (data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
  ws.on("temp", (data) => {
    console.log("data incoming is ", data);
  });
  ws.send("hello world from server");
});

server.listen(3000, function () {
  console.log(new Date() + "server is up and running at port number 3000");
});
