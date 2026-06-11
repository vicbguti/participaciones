// ui/assets/avatars/avatarSelector.js
// Direct URL strings for SVG assets (no module imports, compatible with static http-server)
const SMILE_HIGH_URL = "/ui/assets/avatars/smile-high.svg";
const SMILE_MID_URL = "/ui/assets/avatars/smile-mid.svg";
const NEUTRAL_URL = "/ui/assets/avatars/neutral.svg";

// Participation percentage thresholds (adjust as needed)
const HIGH_THRESHOLD = 80; // >= 80% of max => high smile
const MID_THRESHOLD = 50; // >= 50% of max => mid smile

/**
 * Returns the appropriate avatar SVG URL based on participation.
 * @param {number} count - Student's totalParticipaciones.
 * @param {number} max   - Highest totalParticipaciones in the current dataset.
 * @returns {string} URL to the SVG asset.
 */
export function getAvatarSvg(count, max) {
  if (!max) return { url: NEUTRAL_URL, cls: 'neutral' };
  const pct = (count / max) * 100;
  if (pct >= HIGH_THRESHOLD) return { url: SMILE_HIGH_URL, cls: 'high' };
  if (pct >= MID_THRESHOLD) return { url: SMILE_MID_URL, cls: 'mid' };
  return { url: NEUTRAL_URL, cls: 'neutral' };
}
