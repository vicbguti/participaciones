// ui/renders/leaderboard/view.js
// DOM rendering helpers for the leaderboard UI.

import { getAvatarSvg } from "../../assets/avatars/avatarSelector.js";
import { buildLeaderBoardList } from "../../templates/leaderboard.js";
import { getPodiumMedal } from "../../assets/icons/medals.js";

export const podiumMap = [
  { entryIndex: 1, rank: 2, cls: "place-2" },
  { entryIndex: 0, rank: 1, cls: "place-1" },
  { entryIndex: 2, rank: 3, cls: "place-3" },
];

export function renderLeaderboardContainer(topEntries) {
  const container = document.getElementById("leaderboard");
  if (!container) return null;
  container.innerHTML = "";

  if (topEntries.length === 0) {
    container.innerHTML = '<p class="no-resultados">No hay datos de participaciones.</p>';
    return null;
  }
  return container;
}

import { renderPodium } from "./podium/renderPodium.js";

export async function renderLeaderboardList(container, topEntries) {
  const list = document.createElement("div");
  list.className = "leaderboard-list";

  // Determine max participations for avatar scaling
  const maxParticipaciones = Math.max(...topEntries.map(e => e.totalParticipaciones));

  for (const [i, entry] of topEntries.slice(3).entries()) {
    const { url: avatarSvg, cls: avatarCls } = getAvatarSvg(entry.totalParticipaciones, maxParticipaciones);
    const card = document.createElement("div");
    card.className = "leaderboard-card";
    card.innerHTML = await buildLeaderBoardList(entry, i + 4, avatarSvg, avatarCls);
    list.appendChild(card);
  }

  container.appendChild(list);
}
