import { PLANTILLA, CURSO, NUM_TOP_ENTRIES } from "./config.js";
import { RegistrosCsv } from "./registrosCsv.js";
import { renderLeaderboard } from "./renders.js";

const registrosCsv = new RegistrosCsv(PLANTILLA, CURSO);

async function init() {
  const leaderboardData = await registrosCsv.getLeaderboard();
  renderLeaderboard(leaderboardData, NUM_TOP_ENTRIES);
}


document.addEventListener("DOMContentLoaded", init);
