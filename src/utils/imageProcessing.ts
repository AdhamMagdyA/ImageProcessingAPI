import sharp from 'sharp';

const resizeImage = (filename: string, width: number, height: number) => {
  // the resizing logic is taken from sharp documentation: https://sharp.pixelplumbing.com/api-constructor
  sharp(`./assets/full/${filename}.jpg`)
    .resize(width, height)
    .toFile(
      `./assets/thumb/${filename}_${width}x${height}.jpg`,
      function (err) {
        console.log(err);
        return false;
      }
    );
  console.log('Image resized');
  return true;
};

export default resizeImage;
