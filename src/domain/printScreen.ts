import {IRobot} from "../types/IRobot";
import {IConverter} from "../types/IConverter";

export const printScreen = async (
    robot: IRobot,
    imageConverter: IConverter,
    currentX: number,
    currentY: number,
    size: number): Promise<any> => {
    try {
        const imageBuffer = robot.screen.capture(currentX, currentY, size, size).image;

        return new Promise(function (resolve, reject) {
            new imageConverter({data: imageBuffer, width: size, height: size}, async (err, image) => {
                const result = await image.getBase64Async(imageConverter.MIME_PNG);

                resolve(result);
            });
        });
    } catch (error) {
        console.log(`ERROR: Can't convert screen image`);
        console.log(error);

        return null;
    }
};
