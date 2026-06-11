/* ui/components/brand-header.js */

import { getLogoTP } from "../assets/icons/logo.js";
import { iconTrophy } from "../assets/icons/trophy.js";
import { iconArrowLeft } from "../assets/icons/arrow-left.js";

class BrandHeader extends HTMLElement {
  async connectedCallback() {
    const isLeaderboard = window.location.pathname.includes("leaderboard.html");

    // Resolve the base path so SVG fetches work from any page depth
    const base = isLeaderboard ? '' : '';

    const linkBtn = isLeaderboard
      ? `
        <a href="index.html" class="btn btn-outline">
          ${iconArrowLeft()}
          Volver a Asistencia
        </a>
      `
      : `
        <a href="leaderboard.html" class="btn btn-outline">
          ${iconTrophy()}
          Ver Ranking
        </a>
      `;

    const logoTP = await getLogoTP();

    this.innerHTML = `
      <header class="app-header">
        <div class="header-content">
          <div class="logo-wrapper">
            ${logoTP}
          </div>
          ${linkBtn}
        </div>
      </header>
    `;
  }
}

customElements.define('brand-header', BrandHeader);
