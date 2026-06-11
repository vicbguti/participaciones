/* ui/renders/leaderboard (index) */

import { getEntriesToShow } from "./leaderboard/data.js";
import { renderLeaderboardContainer, renderLeaderboardList } from "./leaderboard/view.js";
import { renderPodium } from "./leaderboard/podium/renderPodium.js";



export async function renderLeaderboard(leaderboardEntries, limit) {
  const entriesToShow = getEntriesToShow(leaderboardEntries, limit);
  const container = renderLeaderboardContainer(entriesToShow);
  if (!container || entriesToShow.length === 0) return;

  if (entriesToShow.length > 0) await renderPodium(container, entriesToShow);
  if (entriesToShow.length > 3) await renderLeaderboardList(container, entriesToShow);
}

function getTopParticipaciones(leaderboardEntries, top) {
  return [...leaderboardEntries].sort((a, b) => b.totalParticipaciones - a.totalParticipaciones).slice(0, top);
}


