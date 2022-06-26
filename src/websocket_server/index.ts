import {ICreateWebSocketStream, IWebSocketController, IWebSocketServer} from "../types/IWebSocket";
import {IPort} from "../types/IPort";

export const startWebSocketServer =
    (port: IPort,
     WebSocketServer: IWebSocketServer,
     createWebSocketStream: ICreateWebSocketStream,
     WebSocketController: IWebSocketController): void => {
    const server = new WebSocketServer({ port });

    server.on('connection', ws => {
        console.log('Success Connection!');

        const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

        duplex.on('data', async chunk => {
            await WebSocketController(chunk, duplex);
        })
    });
};