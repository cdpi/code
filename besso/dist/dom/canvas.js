//////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function getOffscreenCanvasFromImageBlob(blob) {
    const bitmap = await createImageBitmap(blob);
    const { width, height } = bitmap;
    const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    context.drawImage(bitmap, 0, 0);
    return canvas;
}
function getAverageColor(context, x, y, width, height) {
    const count = width * height;
    let red = 0, green = 0, blue = 0;
    //const pixels:ImageDataArray = context.getImageData(x, y, width, height).data;
    const pixels = context.getImageData(x, y, width, height).data;
    for (let i = 0; i < pixels.length; i += 4) {
        red += pixels[i];
        green += pixels[i + 1];
        blue += pixels[i + 2];
    }
    red = Math.round(red / count);
    green = Math.round(green / count);
    blue = Math.round(blue / count);
    return { red, green, blue };
}
function getAverageColors(context, imageWidth, imageHeight, columns, rows) {
    const cellWidth = Math.floor(imageWidth / columns);
    const cellHeight = Math.floor(imageHeight / rows);
    const colors = new Array();
    for (let y = 0; y < rows; y++) {
        const row = new Array();
        for (let x = 0; x < columns; x++) {
            row.push(getAverageColor(context, x * cellWidth, y * cellHeight, cellWidth, cellHeight));
        }
        colors.push(row);
    }
    return colors;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { getOffscreenCanvasFromImageBlob, getAverageColor, getAverageColors };
