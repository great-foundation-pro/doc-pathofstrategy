import fs from 'fs';
import sharp from 'sharp';

async function main() {
  const svgBuffer = fs.readFileSync('public/favicon.svg');
  
  // Render SVG to 32x32 PNG buffer
  const pngBuffer32 = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  // Render SVG to 192x192 PNG buffer
  const pngBuffer192 = await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toBuffer();

  // Save PNG files to public folder
  fs.writeFileSync('public/favicon.png', pngBuffer32);
  fs.writeFileSync('public/icon-192.png', pngBuffer192);

  // Generate ICO file
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type (1 for ICO)
  icoHeader.writeUInt16LE(1, 4); // Number of images

  const icoDirectory = Buffer.alloc(16);
  icoDirectory.writeUInt8(32, 0); // Width
  icoDirectory.writeUInt8(32, 1); // Height
  icoDirectory.writeUInt8(0, 2);  // Color count
  icoDirectory.writeUInt8(0, 3);  // Reserved
  icoDirectory.writeUInt16LE(1, 4); // Color planes
  icoDirectory.writeUInt16LE(32, 6); // Bits per pixel
  icoDirectory.writeUInt32LE(pngBuffer32.length, 8); // Image size
  icoDirectory.writeUInt32LE(22, 12); // Image offset (6 + 16)

  const icoBuffer = Buffer.concat([icoHeader, icoDirectory, pngBuffer32]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  
  console.log('Icons generated successfully!');
}

main().catch(console.error);
