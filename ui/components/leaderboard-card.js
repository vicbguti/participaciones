/* ui/components/leaderboard-card.js */

import { iconTrophy } from "../assets/icons/trophy.js";

class LeaderboardCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="card">
        <h2 class="section-label" style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          ${iconTrophy(18, "var(--brand-orange)")}
          Ranking de Participaciones
        </h2>
        <div id="leaderboard">
          <p class="loading-text">Cargando leaderboard…</p>
        </div>
      </section>
    `;
  }
}

customElements.define('leaderboard-card', LeaderboardCard);
