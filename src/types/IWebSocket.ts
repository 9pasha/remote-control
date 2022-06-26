import {createWebSocketStream, WebSocketServer} from "ws";
import {WebSocketController} from "../websocket_server/WebSocketController";


export type IWebSocketServer = typeof WebSocketServer;
export type ICreateWebSocketStream = typeof createWebSocketStream;
export type IWebSocketController = typeof WebSocketController;
