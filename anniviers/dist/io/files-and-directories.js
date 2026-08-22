import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getFilesAndDirectories(directory = ".", sort = false) {
    const files = new Array();
    const directories = new Array();
    const paths = readdirSync(directory);
    paths.forEach((path) => {
        const currentPath = join(directory, path);
        const stat = statSync(currentPath);
        if (stat.isFile()) {
            files.push(currentPath);
        }
        else if (stat.isDirectory()) {
            directories.push(currentPath);
        }
    });
    if (sort) {
        files.sort();
        directories.sort();
    }
    return { files, directories };
}
function walkFilesRecursively(directory, sort, callback) {
    const filesAndDirectories = getFilesAndDirectories(directory, sort);
    filesAndDirectories.files.forEach((file) => {
        callback(file);
    });
    filesAndDirectories.directories.forEach((directory) => {
        walkFilesRecursively(directory, sort, callback);
    });
}
function readTextFilesRecursively(directory, sort, callback) {
    walkFilesRecursively(directory, sort, (path) => {
        callback(path, readFileSync(path, "utf-8"));
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { getFilesAndDirectories, walkFilesRecursively, readTextFilesRecursively };
