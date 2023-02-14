export const compressImage = async (file: any, { quality = 1, type = file.type }) => {
  const imageBitmap = await createImageBitmap(file);
  const canvas = document.createElement('canvas');
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  const ctx = canvas.getContext('2d');
  //@ts-ignore
  ctx.drawImage(imageBitmap, 0, 0);
  return await new Promise((resolve) => canvas.toBlob(resolve, type, quality));
};
