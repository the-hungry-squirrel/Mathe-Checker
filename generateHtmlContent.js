const fs = require('fs');

// Lese HTML-Datei
const html = fs.readFileSync('./assets/index.html', 'utf8');

// Escape backticks und ${} für Template-String
const escapedHtml = html.replace(/`/g, '\\`').replace(/\${/g, '\\${');

// Erstelle JavaScript-Datei
const jsContent = `// Auto-generated file - do not edit manually
// Generated from assets/index.html

export const HTML_CONTENT = \`${escapedHtml}\`;
`;

fs.writeFileSync('./htmlContent.js', jsContent);
console.log('✅ htmlContent.js generated successfully');
