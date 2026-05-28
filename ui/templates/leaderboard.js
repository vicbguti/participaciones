/* ui/templates/leaderboard.js */

export function buildPodium(initials, entry, rank, medal) {
  return `
    <div class="podium-medal">${medal}</div>
    <div class="podium-avatar">${initials}</div>
    <div class="podium-name">${entry.nombreEstudiante} ${entry.apellidoEstudiante}</div>
    <div class="podium-score">${entry.totalParticipaciones}<span>participaciones</span></div>
    <div class="podium-rank-label">${rank}°</div>
  `;
}

export function buildLeaderBoardList(initials, entry, rank) {
  return `
    <div class="lb-rank">${rank}°</div>
    <div class="lb-avatar">${initials}</div>
    <div class="lb-name">${entry.nombreEstudiante} ${entry.apellidoEstudiante}</div>
    <div class="lb-score">${entry.totalParticipaciones} <span>pts</span></div>
  `;
}
