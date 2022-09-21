import sharp, { OutputInfo } from 'sharp';
import fs from 'fs';

const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<boolean> => {
  // create thumb folder if it doesn't exist
  if (!fs.existsSync('./assets/thumb')) {
    fs.mkdirSync('./assets/thumb');
  }
  // the resizing logic is taken from sharp documentation: https://sharp.pixelplumbing.com/api-constructor
  await sharp(`./assets/full/${filename}.jpg`)
    .resize(width, height)
    .toFile(`./assets/thumb/${filename}_${width}x${height}.jpg`)
    .then((info: OutputInfo) => {
      if (info !== undefined) return true;
    })
    .catch((err) => {
      console.log('Error hapeened: ', err);
      return false;
    });

  return true;
};

export default resizeImage;
