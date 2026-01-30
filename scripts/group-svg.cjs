#!/usr/bin/env node
/**
 * Script to group SVG paths by region for animation
 * - Paths in the bottom-left area (arm + glass) → <g id="arm">
 * - Everything else → <g id="body">
 */

const fs = require('fs');

const inputFile = process.argv[2] || '/home/pierrick/Téléchargements/Gemini_Generated_Image_xmk562xmk562xmk5.svg';
const outputFile = process.argv[3] || '/home/pierrick/Documents/claude-apps/personal-website/public/avatar-grouped.svg';

const svgContent = fs.readFileSync(inputFile, 'utf-8');

// Extract all path elements with their d attribute
const pathRegex = /<path[^>]*style="fill:([^"]+)[^>]*d="([^"]+)"[^>]*\/>/g;
const paths = [];
let match;

while ((match = pathRegex.exec(svgContent)) !== null) {
  const fill = match[1];
  const d = match[2];
  const fullMatch = match[0];

  // Parse first coordinate from path to determine region
  const coordMatch = d.match(/M(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)/);
  if (coordMatch) {
    const x = parseFloat(coordMatch[1]);
    const y = parseFloat(coordMatch[2]);
    paths.push({ fill, d, fullMatch, x, y });
  }
}

console.log(`Found ${paths.length} paths`);

// Separate paths: arm region is roughly x < 400 and y > 600
const armPaths = paths.filter(p => p.x < 420 && p.y > 580);
const bodyPaths = paths.filter(p => !(p.x < 420 && p.y > 580));

console.log(`Arm paths: ${armPaths.length}`);
console.log(`Body paths: ${bodyPaths.length}`);

// Build new SVG with groups
const newSvg = `<?xml version="1.0" standalone="yes"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <defs>
    <clipPath id="circle-clip">
      <circle cx="512" cy="512" r="512" />
    </clipPath>
  </defs>
  <g clip-path="url(#circle-clip)">
    <!-- Background fill -->
    <rect width="1024" height="1024" fill="#ddd0aa" />
    <g id="body">
      ${bodyPaths.map(p => p.fullMatch).join('\n      ')}
    </g>
    <g id="arm" style="transform-origin: 300px 600px;">
      ${armPaths.map(p => p.fullMatch).join('\n      ')}
    </g>
  </g>
</svg>`;

fs.writeFileSync(outputFile, newSvg);
console.log(`Output written to ${outputFile}`);
