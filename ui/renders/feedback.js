/* ui/renders/feedback.js */

import { iconCheck } from "../assets/icons/check.js";

export function renderGuardarRegistros() {
  const container = document.getElementById("guardar-registros");
  if (!container) return;
  
  container.innerHTML = `
    ${iconCheck()}
    Registros guardados correctamente.
  `;
  container.classList.remove("hidden");
  setTimeout(() => container.classList.add("hidden"), 3000);
}
