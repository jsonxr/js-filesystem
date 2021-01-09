import { FileSystem } from './FileSystem';
import fileSystemIndexDb from './FileSystemIndexDb';

export const createFileSystem = (): FileSystem => {
  return fileSystemIndexDb();
};
