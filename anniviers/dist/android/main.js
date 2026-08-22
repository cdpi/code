import { writeFileSync } from "node:fs";
import { FILENAME_APPFILTER, FILENAME_DRAWABLE, csvToAppFilter, csvToDrawable } from "./icons.js";
//writeFileSync(`res/xml/${FILENAME_APPFILTER}`, csvToAppFilter("android-applications.csv"));
//writeFileSync(`res/xml/${FILENAME_DRAWABLE}`, csvToDrawable("android-applications.csv"));
writeFileSync(FILENAME_APPFILTER, csvToAppFilter("android-applications.csv"));
writeFileSync(FILENAME_DRAWABLE, csvToDrawable("android-applications.csv"));
