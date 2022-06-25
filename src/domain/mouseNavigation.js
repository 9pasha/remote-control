export const getMousePosition = (robot) =>
    robot.getMousePos();

export const moveMouseDown = (robot, currentX, currentY, dY) => {
    const newY = currentY + dY;
    robot.moveMouse(currentX, newY);
};

export const moveMouseUp = (robot, currentX, currentY, dY) => {
    const newY = currentY - dY;
    robot.moveMouse(currentX, newY);
};

export const moveMouseLeft = (robot, currentX, currentY, dX) => {
    const newX = currentX - dX;
    robot.moveMouse(newX, currentY);
};

export const moveMouseRight = (robot, currentX, currentY, dX) => {
    const newX = currentX + dX;
    robot.moveMouse(newX, currentY);
};
