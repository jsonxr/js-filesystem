const { createFileSystem } = require('@jsonxr/filesystem');

async function main() {
  const fs = createFileSystem();
  await fs.set('test.dat', 'hello');
  const text = await fs.get('test.dat');
  console.log('test=', text);
}
main();
