import fs from 'fs';
import sharp from 'sharp';

async function main() {
  console.log('Optimizing images...');

  const heroPngPath = 'public/images/hero-bg.png';
  const ctaPngPath = 'public/images/cta-bg.png';
  const heroWebpPath = 'public/images/hero-bg.webp';
  const ctaWebpPath = 'public/images/cta-bg.webp';

  // Helper function to format bytes to KB/MB
  const formatSize = (bytes) => {
    if (bytes >= 1048576) return (bytes / 1048576).toFixed(2) + ' MB';
    return (bytes / 1024).toFixed(2) + ' KB';
  };

  if (fs.existsSync(heroPngPath)) {
    const originalSize = fs.statSync(heroPngPath).size;
    console.log(`Original hero-bg.png size: ${formatSize(originalSize)}`);
    
    await sharp(heroPngPath)
      .webp({ quality: 82 })
      .toFile(heroWebpPath);
      
    const optimizedSize = fs.statSync(heroWebpPath).size;
    console.log(`Optimized hero-bg.webp size: ${formatSize(optimizedSize)} (Saved ${(100 - (optimizedSize / originalSize * 100)).toFixed(1)}%)`);
  }

  if (fs.existsSync(ctaPngPath)) {
    const originalSize = fs.statSync(ctaPngPath).size;
    console.log(`Original cta-bg.png size: ${formatSize(originalSize)}`);
    
    await sharp(ctaPngPath)
      .webp({ quality: 82 })
      .toFile(ctaWebpPath);
      
    const optimizedSize = fs.statSync(ctaWebpPath).size;
    console.log(`Optimized cta-bg.webp size: ${formatSize(optimizedSize)} (Saved ${(100 - (optimizedSize / originalSize * 100)).toFixed(1)}%)`);
  }

  console.log('Image optimization complete!');
}

main().catch(console.error);
