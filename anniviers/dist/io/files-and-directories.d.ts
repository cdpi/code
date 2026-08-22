type FilesAndDirectories = {
    files: Array<string>;
    directories: Array<string>;
};
type WalkFilesRecursivelyCallback = (path: string) => void;
type ReadTextFilesRecursivelyCallback = (path: string, content: string) => void;
declare function getFilesAndDirectories(directory?: string, sort?: boolean): FilesAndDirectories;
declare function walkFilesRecursively(directory: string, sort: boolean, callback: WalkFilesRecursivelyCallback): void;
declare function readTextFilesRecursively(directory: string, sort: boolean, callback: ReadTextFilesRecursivelyCallback): void;
export { type FilesAndDirectories, type WalkFilesRecursivelyCallback, type ReadTextFilesRecursivelyCallback, getFilesAndDirectories, walkFilesRecursively, readTextFilesRecursively };
