import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import { WebSocketServer } from 'ws';
import { WebSocketController } from "./WebSocketController.js";

const PORT = process.env.PORT || 8080;

const server = new WebSocketServer({ port: PORT });

export let webSocket = null;

server.on('connection', ws => {
    console.log('Success Connect !)');

    webSocket = ws;

    ws.on('message', async message => {
        console.log(message.toString());

        await WebSocketController(message.toString(), ws);
    });
});


// robot.setMouseDelay(2);
//
// var twoPI = Math.PI * 2.0;
// var screenSize = robot.getScreenSize();
// var height = (screenSize.height / 2) - 10;
// var width = screenSize.width;
//
// for (var x = 0; x < width; x++)
// {
//     const y = height * Math.sin((twoPI * x) / width) + height;
//     robot.moveMouse(x, y);
// }

export const httpServer = http.createServer(function (req, res) {
    const __dirname = path.resolve(path.dirname(''));
    const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
    fs.readFile(file_path, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});
