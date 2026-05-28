import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const resolve = (...parts) => join(__dirname, ...parts);

export function loadSVG(filename) {
  const raw = readFileSync(resolve('../source', filename), 'utf8');
  const match = raw.match(/<svg[^>]*viewBox="([^"]+)"[^>]*>([\s\S]*?)<\/svg>/i);
  return {
    viewBox: match ? match[1] : '0 0 0 0',
    content: match ? match[2].trim() : ''
  };
}
