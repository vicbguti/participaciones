import { loadSVG } from '../core/svg-parser.js';
import { wrapStandalone, saveSVG } from '../core/composer.js';

export function buildFavicon() {
  const circuit = loadSVG('circuit.svg');
  
  const content = [
    '  <!-- Component: Circuit -->',
    `  ${circuit.content}`
  ].join('\n');
  
  const svg = wrapStandalone(circuit.viewBox, content);
  saveSVG('favicon-composed.svg', svg);
}
