import { loadSVG } from '../core/svg-parser.js';
import { buildTypographyPaths } from '../core/font-engine.js';
import { wrapResponsive, saveSVG } from '../core/composer.js';
import { config } from '../config.js';

export function buildLogoHorizontal() {
  const frame = loadSVG('frame.svg');
  const circuit = loadSVG('circuit.svg');
  const typo = buildTypographyPaths(config.textLayout);
  
  const symbolClean = [
    '    <!-- Component: Frame -->',
    `    ${frame.content}`,
    '    <!-- Component: Circuit -->',
    `    ${circuit.content}`
  ].join('\n');
  
  const viewWidth = typo.bounds.maxX + config.container.padding.right;
  const symbolBottom = config.container.padding.top + config.symbol.height;
  const viewHeight = Math.max(typo.bounds.maxY, symbolBottom) + config.container.padding.bottom;
  
  const innerContent = [
    '  <!-- Isotipo: builder/source/* (composed) -->',
    `  <svg x="${config.container.padding.left}" y="${config.container.padding.top}" width="${config.symbol.width}" height="${config.symbol.height}" viewBox="${frame.viewBox}" overflow="visible">`,
    `${symbolClean}`,
    '  </svg>',
    '',
    '  <!-- Logotipo: Generated Text Paths -->',
    '  <g class="brand-text-group">',
    typo.paths,
    '  </g>'
  ].join('\n');
  
  const svg = wrapResponsive(viewWidth, viewHeight, config.container.height, innerContent);
  saveSVG('logo-composed.svg', svg);
  console.log(`  Dynamic ViewBox: 0 0 ${viewWidth.toFixed(1)} ${viewHeight.toFixed(1)}`);
}
