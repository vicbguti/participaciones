/* ui/templates/leaderboard.js */

import { getAvatarMarkup } from "../assets/avatars/avatarMarkup.js";

export async function buildPodium(initials, entry, rank, medal, avatarSvg, avatarCls) {
  const avatarMarkup = await getAvatarMarkup(avatarSvg);
  return `
    <div class="podium-medal">${medal}</div>
    <div class="podium-avatar avatar-img avatar-${avatarCls}">${avatarMarkup}</div>
    <div class="podium-name">${entry.nombreEstudiante} ${entry.apellidoEstudiante}</div>
    <div class="podium-score">${entry.totalParticipaciones}<span>participaciones</span></div>
    <div class="podium-rank-label">${rank}°</div>
  `;
}


export async function buildLeaderBoardList(entry, rank, avatarSvg, avatarCls) {
  const avatarMarkup = await getAvatarMarkup(avatarSvg);
  return `
    <div class="lb-rank">${rank}°</div>
    <div class="lb-avatar avatar-img avatar-${avatarCls}">${avatarMarkup}</div>
    <div class="lb-name">${entry.nombreEstudiante} ${entry.apellidoEstudiante}</div>
    <div class="lb-score">${entry.totalParticipaciones} <span>pts</span></div>
  `;
}
