/* ui/renders/leaderboard (index) */

import { getEntriesToShow } from "./leaderboard/data.js";
import { renderLeaderboardContainer, renderPodium, renderLeaderboardList } from "./leaderboard/view.js";



export function renderLeaderboard(leaderboardEntries, limit) {
  const entriesToShow = getEntriesToShow(leaderboardEntries, limit);
  const container = renderLeaderboardContainer(entriesToShow);
  if (!container || entriesToShow.length === 0) return;

  if (entriesToShow.length > 0) renderPodium(container, entriesToShow);
  if (entriesToShow.length > 3) renderLeaderboardList(container, entriesToShow);
}

function getTopParticipaciones(leaderboardEntries, top) {
  return [...leaderboardEntries].sort((a, b) => b.totalParticipaciones - a.totalParticipaciones).slice(0, top);
}


