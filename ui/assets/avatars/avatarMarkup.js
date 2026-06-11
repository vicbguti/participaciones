// ui/assets/avatars/avatarMarkup.js
/**
 * Returns the SVG markup for an avatar URL.
 * Caller should embed the returned string directly into HTML.
 */
export async function getAvatarMarkup(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Cannot load avatar ${url}`);
  return await resp.text();   // raw <svg …>…</svg>
}
