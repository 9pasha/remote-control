import * as path from 'path';
import * as http from 'http';
import { WebSocketServer } from 'ws';
import { WebSocketController } from "./WebSocketController.js";
import fs from 'node:fs/promises';

const PORT = process.env.PORT || 8080;

const server = new WebSocketServer({ port: PORT });

export let webSocket = null;

server.on('connection', ws => {
    console.log('Success Connection!');

    webSocket = ws;

    ws.on('message', async message => {
        console.log(message.toString());

        await WebSocketController(message.toString(), ws);
    });
});

export const httpServer = http.createServer(async (req, res) => {
    const __dirname = path.resolve(path.dirname(''));
    const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);

    try {
        const readHtmlStream = await fs.readFile(file_path);

        res.writeHead(200);
        res.end(readHtmlStream);
    } catch (error) {
        res.writeHead(404);
        res.end(JSON.stringify(error));

        throw new Error('Something wrong with loading html file');
    }
});
