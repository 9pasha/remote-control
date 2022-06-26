import { httpServer } from './src/http_server/index.js';
import {createWebSocketStream, WebSocketServer} from "ws";
import {startWebSocketServer} from "./src/websocket_server/index.js";
import {WebSocketController} from "./src/websocket_server/WebSocketController.js";

const HTTP_PORT = process.env.HTTP_PORT || 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT || 8080;

console.log(`Start websocket server on the ${WEBSOCKET_PORT} port!`);
startWebSocketServer(WEBSOCKET_PORT, WebSocketServer, createWebSocketStream, WebSocketController);
