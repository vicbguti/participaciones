#!/usr/bin/env node
/* ui/assets/icons/logo/builder/generate.js */

import { buildFavicon } from './variants/Favicon.js';
import { buildSymbol } from './variants/Symbol.js';
import { buildLogoHorizontal } from './variants/LogoHorizontal.js';

console.log('--- Starting Brand Asset Generation ---');

try {
  buildFavicon();
  buildSymbol();
  buildLogoHorizontal();
  console.log('--- Generation Complete ---');
} catch (error) {
  console.error('Error generating assets:', error);
  process.exit(1);
}
