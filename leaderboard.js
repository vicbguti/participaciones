import { PLANTILLA, CURSO, NUM_TOP_ENTRIES } from "./config.js";
import { RegistrosExcel } from "./registrosExcel.js";
import { renderLeaderboard } from "./renders.js";

const registrosExcel = new RegistrosExcel(PLANTILLA, CURSO);

async function init() {
  const leaderboardData = await registrosExcel.getLeaderboard();
  renderLeaderboard(leaderboardData, NUM_TOP_ENTRIES);
}


document.addEventListener("DOMContentLoaded", init);