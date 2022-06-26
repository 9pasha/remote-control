export const startWebSocketServer = (port, WebSocketServer, createWebSocketStream, WebSocketController) => {
    const server = new WebSocketServer({ port });

    server.on('connection', ws => {
        console.log('Success Connection!');

        const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

        duplex.on('data', async chunk => {
            await WebSocketController(chunk, duplex);
        })
    });
};