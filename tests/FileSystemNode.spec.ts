import { createFileSystem } from '../src';

describe('FileSystemNode', () => {
  it('should save file to file system', async () => {
    const fs = createFileSystem();
    await fs.set('test.dat', 'jason was here');
    const text = await fs.get('test.dat');
    expect(text).toEqual('jason was here');
  });

  it('should restrict the save file to the specified root of the file system', async () => {
    const fs = createFileSystem('.');
    await fs.set('/test.dat', 'jason was here');
    const text = await fs.get('test.dat');
    expect(text).toEqual('jason was here');
  });

  it('should not allow bypass of the specified root file system', async () => {
    const fs = createFileSystem('.');
    expect.assertions(1);
    try {
      await fs.set('../test.dat', 'jason was here');
    } catch {
      expect(true).toBeTruthy();
    }
  });

  it('should remove file from file system', async () => {
    const fs = createFileSystem('.');

    await fs.set('test.dat', 'jason was here');
    await fs.remove('test.dat');
  });
});
