import { RedGreenBlue } from "zinal/image/color.js";
declare function getOffscreenCanvasFromImageBlob(blob: Blob): Promise<OffscreenCanvas>;
declare function getAverageColor(context: CanvasImageData, x: number, y: number, width: number, height: number): RedGreenBlue;
declare function getAverageColors(context: CanvasImageData, imageWidth: number, imageHeight: number, columns: number, rows: number): Array<Array<RedGreenBlue>>;
export { getOffscreenCanvasFromImageBlob, getAverageColor, getAverageColors };
