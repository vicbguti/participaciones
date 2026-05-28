import { loadSVG } from '../core/svg-parser.js';
import { wrapStandalone, saveSVG } from '../core/composer.js';

export function buildSymbol() {
  const frame = loadSVG('frame.svg');
  const circuit = loadSVG('circuit.svg');
  
  const content = [
    '  <!-- Component: Frame -->',
    `  ${frame.content}`,
    '  <!-- Component: Circuit -->',
    `  ${circuit.content}`
  ].join('\n');
  
  const svg = wrapStandalone(frame.viewBox, content);
  saveSVG('symbol-composed.svg', svg);
}
