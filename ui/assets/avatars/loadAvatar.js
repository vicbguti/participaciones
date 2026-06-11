// ui/assets/avatars/loadAvatar.js
/**
 * Utility to load SVG avatars from data-url attributes and inline them.
 * This allows CSS color inheritance via the .avatar-{state} classes.
 */
export function loadAvatars(root = document) {
  const avatarElems = root.querySelectorAll('[class*="avatar-"][data-url]');
  avatarElems.forEach(async (el) => {
    const url = el.getAttribute('data-url');
    if (!url) return;
    try {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error(`Failed to fetch ${url}`);
      const svgText = await resp.text();
      // Insert the SVG markup directly; it will inherit the element's CSS color.
      el.innerHTML = svgText;
    } catch (e) {
      console.error('Avatar load error:', e);
    }
  });
}
