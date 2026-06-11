// ui/renders/leaderboard/view.js
// DOM rendering helpers for the leaderboard UI.

import { buildPodium, buildLeaderBoardList } from "../../templates/leaderboard.js";
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

export function renderPodium(container, topEntries) {
  const podium = document.createElement("div");
  podium.className = "podium";

  podiumMap.forEach(({ entryIndex, rank, cls }) => {
    if (entryIndex >= topEntries.length) return;
    const entry = topEntries[entryIndex];
    const slot = document.createElement("div");
    slot.className = `podium-slot ${cls}`;
    const initials = (entry.nombreEstudiante[0] + entry.apellidoEstudiante[0]).toUpperCase();
    const medal = getPodiumMedal(rank);
    slot.innerHTML = buildPodium(initials, entry, rank, medal);
    podium.appendChild(slot);
  });

  container.appendChild(podium);
}

export function renderLeaderboardList(container, topEntries) {
  const list = document.createElement("div");
  list.className = "leaderboard-list";

  topEntries.slice(3).forEach((entry, i) => {
    const initials = (entry.nombreEstudiante[0] + entry.apellidoEstudiante[0]).toUpperCase();
    const card = document.createElement("div");
    card.className = "leaderboard-card";
    card.innerHTML = buildLeaderBoardList(initials, entry, i + 4);
    list.appendChild(card);
  });

  container.appendChild(list);
}
