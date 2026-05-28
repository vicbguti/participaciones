/* ui/assets/icons/medals.js */

export const getPodiumMedal = (rank) => {
  const colors = {
    1: "var(--brand-orange)",
    2: "var(--brand-cyan)",
    3: "var(--brand-magenta)"
  };
  const color = colors[rank] || "var(--brand-dark-muted)";
  
  return `
    <svg class="podium-badge-svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;">
      <circle cx="12" cy="8" r="6" fill="${color}" fill-opacity="0.15"></circle>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"></path>
    </svg>
  `;
};
