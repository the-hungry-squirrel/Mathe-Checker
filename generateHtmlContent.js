const fs = require('fs');
const path = require('path');

// Read HTML file
const html = fs.readFileSync('./assets/index.html', 'utf8');

// Read all avatar images and convert to base64
const avatarNames = [
  'ninjamale1', 'ninjamale2', 'ninjamale3', 'ninjamale4',
  'ninjafemale1', 'ninjafemale2', 'ninjafemale3', 'ninjafemale4'
];

let modifiedHtml = html;

// Replace each image path with base64 data URI
avatarNames.forEach(name => {
  const imagePath = path.join(__dirname, 'assets', `${name}.png`);
  if (fs.existsSync(imagePath)) {
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');
    const dataUri = `data:image/png;base64,${base64Image}`;

    // Replace all occurrences of this image path
    const regex = new RegExp(`assets/${name}\\.png`, 'g');
    modifiedHtml = modifiedHtml.replace(regex, dataUri);
    console.log(`✅ Converted ${name}.png to base64`);
  } else {
    console.warn(`⚠️  Image not found: ${imagePath}`);
  }
});

// Escape backticks and ${} for Template-String
const escapedHtml = modifiedHtml.replace(/`/g, '\\`').replace(/\${/g, '\\${');

// Create JavaScript file
const jsContent = `// Auto-generated file - do not edit manually
// Generated from assets/index.html with base64-encoded images

export const HTML_CONTENT = \`${escapedHtml}\`;
`;

fs.writeFileSync('./htmlContent.js', jsContent);
console.log('✅ htmlContent.js generated successfully with embedded images');
