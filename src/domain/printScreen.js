export const printScreen = async (robot, imageConverter, currentX, currentY, size) => {
    try {
        const imageBuffer = robot.screen.capture(currentX, currentY, size, size).image;

        return new Promise(function (resolve, reject) {
            new imageConverter({data: imageBuffer, width: size, height: size}, async (err, image) => {
                const result = await image.getBase64Async(imageConverter.MIME_PNG);
                // let buff = new Buffer(image);
                // let base64data = buff.toString('base64');

                resolve(result);
            });
        });
    } catch (error) {
        console.log(`ERROR: Can't convert screen image`);
        console.log(error);

        return null;
    }
};
