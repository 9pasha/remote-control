import {createWebSocketStream, WebSocketServer} from "ws";
import {WebSocketController} from "./WebSocketController.js";

const PORT = process.env.WEBSOCKET_PORT || 8080;

const server = new WebSocketServer({ port: PORT });

server.on('connection', ws => {
    console.log('Success Connection!');

    const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

    // duplex.pipe(process.stdout);
    // process.stdin.pipe(duplex);

    duplex.on('data', async chunk => {
        await WebSocketController(chunk, duplex);
    })

    // webSocket = ws;
    //
    // ws.on('message', async message => {
    //     console.log(message.toString());
    //
    //     await WebSocketController(message.toString(), ws);
    // });
});