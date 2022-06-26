import {IRobot} from "../types/IRobot";

export const getMousePosition = (robot) =>
    robot.getMousePos();

export const moveMouseDown =
    (robot: IRobot, currentX: number, currentY: number, dY: number): void => {
    const newY: number = currentY + dY;
    robot.moveMouse(currentX, newY);
};

export const moveMouseUp =
    (robot: IRobot, currentX: number, currentY: number, dY: number): void => {
    const newY: number = currentY - dY;
    robot.moveMouse(currentX, newY);
};

export const moveMouseLeft =
    (robot: IRobot, currentX: number, currentY: number, dX: number): void => {
    const newX: number = currentX - dX;
    robot.moveMouse(newX, currentY);
};

export const moveMouseRight =
    (robot: IRobot, currentX: number, currentY: number, dX: number): void => {
    const newX: number = currentX + dX;
    robot.moveMouse(newX, currentY);
};
