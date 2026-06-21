import fs from 'node:fs';
import path from 'node:path';

const filePath = path.join('src', 'test.txt');
// const filePath2 = path.join('src', 'test2.txt');

const readableStream = fs.createReadStream(filePath, {
  highWaterMark: 1024,
});

let counter = 1;
let total = 0;

readableStream.on('data', chunk => {
  console.log(`Chunk #${counter}: ${chunk.byteLength} bytes`);
  counter += 1;
  total += chunk.byteLength;
});

readableStream.on('end', () => {
  console.log(`Total size: ${total} bytes`);
});
