import {
    WebSocketDrawingEvents,
    WebSocketNavigationEvents, WebSocketPrintScreenEvents
} from "../enums/WebSocketEvents.js";
import robot from "robotjs";
import {
    getMousePosition,
    moveMouseDown,
    moveMouseLeft,
    moveMouseRight,
    moveMouseUp
} from "../domain/mouseNavigation.js";
import {
    drawCircle,
    drawRectangle,
    drawSquare
} from "../domain/drawFigures.js";
import { printScreen } from "../domain/printScreen.js";
import Jimp from "jimp";

export const WebSocketController = async (message, WebSocket) => {
    const splitedMessage = message.split(' ');
    let { x, y } = getMousePosition(robot);

    console.log(splitedMessage)

    switch (splitedMessage[0]) {
        case WebSocketNavigationEvents.MousePosition:
            WebSocket._write(`mouse_position ${x},${y}`);
            break;
        case WebSocketNavigationEvents.MouseDown:
            moveMouseDown(robot, x, y, Number(splitedMessage[1]));
            break;
        case WebSocketNavigationEvents.MouseUp:
            moveMouseUp(robot, x, y, Number(splitedMessage[1]));
            break;
        case WebSocketNavigationEvents.MouseLeft:
            moveMouseLeft(robot, x, y, Number(splitedMessage[1]));
            break;
        case WebSocketNavigationEvents.MouseRight:
            moveMouseRight(robot, x, y, Number(splitedMessage[1]));
            break;
        case WebSocketDrawingEvents.DrawSquare:
            drawSquare(robot, x, y, Number(splitedMessage[1]));
            break;
        case WebSocketDrawingEvents.DrawRectangle:
            drawRectangle(robot, x, y, Number(splitedMessage[1]), Number(splitedMessage[2]));
            break;
        case WebSocketDrawingEvents.DrawCircle:
            drawCircle(robot, x, y, Number(splitedMessage[1]));
            break;
        case WebSocketPrintScreenEvents.PrintScreen:
            const size = 200;

            let screenInPngBase64 = await printScreen(robot, Jimp, x - size/2, y - size/2, size);
            screenInPngBase64 = screenInPngBase64.replace('data:image/png;base64,', '');

            WebSocket._write(`${WebSocketPrintScreenEvents.PrintScreen} ${screenInPngBase64}\0`);
            break;
        default:
            break;
    }
};
