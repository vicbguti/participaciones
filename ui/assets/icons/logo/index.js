/* ui/assets/icons/logo/index.js */

export async function getLogoTP(base = '') {
  // Dumb loader: fetches the pre-built, pre-calculated, final artifact.
  const res  = await fetch(`${base}ui/assets/icons/logo/logo-composed.svg`);
  const text = await res.text();
  
  // Strip XML declaration and return just the inline <svg>
  return text.replace(/<\?xml[^?]*\?>\s*/i, '').trim();
}
