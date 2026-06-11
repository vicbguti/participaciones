// ui/renders/leaderboard/podium/renderPodium.js
import { podiumMap } from "./podiumMap.js";
import { buildPodium } from "../../../templates/leaderboard.js";
import { getPodiumMedal } from "../../../assets/icons/medals.js";
import { getAvatarSvg } from "../../../assets/avatars/avatarSelector.js";

/**
 * Render the podium (top 3) into the given container.
 * @param {HTMLElement} container - The leaderboard container element.
 * @param {Array} topEntries - Array of entry objects (sorted by participation).
 */
export async function renderPodium(container, topEntries) {
  const podium = document.createElement("div");
  podium.className = "podium";

  // Determine the highest participation count among the displayed entries.
  const maxParticipaciones = Math.max(...topEntries.map(e => e.totalParticipaciones));

  for (const { entryIndex, rank, cls } of podiumMap) {
    if (entryIndex >= topEntries.length) continue;
    const entry = topEntries[entryIndex];
    const initials = (entry.nombreEstudiante[0] + entry.apellidoEstudiante[0]).toUpperCase();
    const medal = getPodiumMedal(rank);
    const { url: avatarUrl, cls: avatarCls } = getAvatarSvg(entry.totalParticipaciones, maxParticipaciones);
    const slot = document.createElement("div");
    slot.className = `podium-slot ${cls}`;
    slot.innerHTML = await buildPodium(initials, entry, rank, medal, avatarUrl, avatarCls);
    podium.appendChild(slot);
  }

  container.appendChild(podium);
}
