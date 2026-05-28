import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import opentype from 'opentype.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fontBuffer = readFileSync(join(__dirname, '../fonts/good-times-rg.otf'));
const font = opentype.parse(fontBuffer.buffer);

function commandsToPathData(commands) {
  const fmt = n => {
    if (n === undefined || n === null || isNaN(n) || !isFinite(n)) return '0';
    return parseFloat(n.toFixed(4)).toString();
  };
  return commands.map(cmd => {
    switch (cmd.type) {
      case 'M': return `M${fmt(cmd.x)} ${fmt(cmd.y)}`;
      case 'L': return `L${fmt(cmd.x)} ${fmt(cmd.y)}`;
      case 'C': return `C${fmt(cmd.x1)} ${fmt(cmd.y1)} ${fmt(cmd.x2)} ${fmt(cmd.y2)} ${fmt(cmd.x)} ${fmt(cmd.y)}`;
      case 'Q': return `Q${fmt(cmd.x1)} ${fmt(cmd.y1)} ${fmt(cmd.x)} ${fmt(cmd.y)}`;
      case 'Z': return 'Z';
      default:  return '';
    }
  }).join('');
}

export function buildTypographyPaths(textLayoutConfig) {
  let maxX = 0;
  let maxY = 0;
  const pathElements = [];

  for (const [group, entries] of Object.entries(textLayoutConfig)) {
    for (const [key, textConf] of Object.entries(entries)) {
      const path = font.getPath(textConf.label, 0, 0, 100);
      const d = commandsToPathData(path.commands);

      const tx = textConf.translate[0];
      const ty = textConf.translate[1];
      const sc = textConf.scale;
      const pathEl = `    <path d="${d}" fill="${textConf.fill}" transform="translate(${tx}, ${ty}) scale(${sc})"/>`;
      pathElements.push(`    <!-- ${textConf.label} -->\n${pathEl}`);

      for (const cmd of path.commands) {
        if (cmd.x !== undefined) {
          const renderedX = tx + cmd.x * sc;
          if (renderedX > maxX) maxX = renderedX;
        }
        if (cmd.y !== undefined) {
          const renderedY = ty + cmd.y * sc;
          if (renderedY > maxY) maxY = renderedY;
        }
      }
    }
  }

  // Ensure maxY covers baselines
  const baselines = Object.values(textLayoutConfig).flatMap(g => Object.values(g)).map(e => e.translate[1]);
  const maxBaseline = Math.max(...baselines);
  if (maxBaseline > maxY) maxY = maxBaseline;

  return {
    paths: pathElements.join('\n\n'),
    bounds: { maxX, maxY }
  };
}
