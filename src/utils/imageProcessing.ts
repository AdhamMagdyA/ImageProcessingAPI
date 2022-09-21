import sharp from 'sharp';

const resizeImage = async (filename: string, width: number, height: number) => {
  // the resizing logic is taken from sharp documentation: https://sharp.pixelplumbing.com/api-constructor
  const message = await sharp(`./assets/full/${filename}.jpg`)
    .resize(width, height)
    .toFile(`./assets/thumb/${filename}_${width}x${height}.jpg`)
    .catch((err) => {
      console.log('Error hapeened: ', err);
    });
  // cheking if the image was completely resized correctly
  if (message !== undefined || message !== null) {
    return true;
  } else {
    return false;
  }
};

export default resizeImage;
