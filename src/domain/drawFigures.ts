import {IRobot} from "../types/IRobot";

export const drawCircle = (
    robot: IRobot,
    currentX: number,
    currentY: number,
    radius: number
): void => {
    const circleCenter = { x: currentX, y: currentY };
    const circleLength: number = 2 * Math.PI * radius;

    for (let i = 0; i < circleLength; i++) {
        const x: number = (circleCenter.x +
            radius * Math.cos(2 * Math.PI * i / circleLength));
        const y: number = (circleCenter.y +
            radius * Math.sin(2 * Math.PI * i / circleLength));

        robot.setMouseDelay(1);
        robot.moveMouseSmooth(x, y);
    }
};

export const drawRectangle = (
    robot: IRobot,
    currentX: number,
    currentY: number,
    width: number,
    height: number
): void => {
    robot.setMouseDelay(500);
    robot.moveMouse(currentX + width, currentY);
    robot.moveMouse(currentX + width, currentY + height);
    robot.moveMouse(currentX, currentY + height);
    robot.moveMouse(currentX, currentY);
};

export const drawSquare = (
    robot: IRobot,
    currentX: number,
    currentY: number,
    size: number): void => {
    drawRectangle(robot, currentX, currentY, size, size);
};
