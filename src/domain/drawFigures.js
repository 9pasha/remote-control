export const drawCircle = (robot, currentX, currentY, radius) => {
    const circleCenter = { x: currentX, y: currentY };
    const circleLength = 2 * Math.PI * radius;

    for (let i = 0; i < circleLength; i++) {
        const x = (circleCenter.x +
            radius * Math.cos(2 * Math.PI * i / circleLength));
        const y = (circleCenter.y +
            radius * Math.sin(2 * Math.PI * i / circleLength));

        robot.setMouseDelay(1);
        robot.moveMouseSmooth(x, y);
    }
};

export const drawRectangle = (robot, currentX, currentY, width, height) => {
    robot.setMouseDelay(500);
    robot.moveMouse(currentX + width, currentY);
    robot.moveMouse(currentX + width, currentY + height);
    robot.moveMouse(currentX, currentY + height);
    robot.moveMouse(currentX, currentY);
};

export const drawSquare = (robot, currentX, currentY, size) => {
    drawRectangular(robot, currentX, currentY, size, size);
};
