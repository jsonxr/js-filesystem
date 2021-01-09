import path from 'path';
import fs from 'fs/promises';

import { FileSystem } from './FileSystem';

export const createFileSystem = (root = '.'): FileSystem => {
  const dir = path.resolve(root);

  const sanitizeFilename = (filename: string) => {
    const filepath = path.resolve(path.join(dir, filename));
    if (!filepath.startsWith(dir)) {
      throw new Error(`"${filename}" can not be outside of "${dir}"`);
    }
    return filepath;
  };

  const get = async (filename: string): Promise<string> => {
    const filepath = sanitizeFilename(filename);
    return fs.readFile(filepath, { encoding: 'utf-8' });
  };

  const set = async (filename: string, data: string): Promise<void> => {
    const filepath = sanitizeFilename(filename);
    return fs.writeFile(filepath, data, { encoding: 'utf-8' });
  };

  const remove = async (filename: string): Promise<void> => {
    const filepath = sanitizeFilename(filename);
    return fs.unlink(filepath);
  };

  return { get, set, remove };
};
