// ui/renders/leaderboard/data.js
// Helper functions for sorting and optional limiting of leaderboard entries.

/**
 * Return a new array sorted descending by totalParticipaciones.
 * @param {Array} entries - raw leaderboard entries.
 * @returns {Array} sorted entries.
 */
export function sortByParticipacionesDesc(entries) {
  return [...entries].sort((a, b) => b.totalParticipaciones - a.totalParticipaciones);
}

/**
 * Slice the sorted array if a limit is provided.
 * @param {Array} sorted - already sorted entries.
 * @param {number} limit - optional limit (undefined means no slice).
 * @returns {Array} sliced or full array.
 */
export function limitEntries(sorted, limit) {
  if (typeof limit === 'number') {
    return sorted.slice(0, limit);
  }
  return sorted; // no limit => return full list
}

/**
 * Combine sorting and optional limiting.
 * @param {Array} allEntries - the complete dataset.
 * @param {number} [limit] - optional number of rows to show.
 * @returns {Array} entries ready for rendering.
 */
export function getEntriesToShow(allEntries, limit) {
  const sorted = sortByParticipacionesDesc(allEntries);
  return limitEntries(sorted, limit);
}
