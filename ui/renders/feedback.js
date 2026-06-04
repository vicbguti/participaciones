/* ui/renders/feedback.js */

import { iconCheck } from "../assets/icons/check.js";

export function renderGuardarRegistros(message = "Registros guardados correctamente.", type = "success") {
  const container = document.getElementById("guardar-registros");
  if (!container) return;

  container.classList.remove("guardar-mensaje-success", "guardar-mensaje-error");
  container.classList.add(`guardar-mensaje-${type}`);
  container.innerHTML = `
    ${type === "success" ? iconCheck() : ""}
    ${message}
  `;
  container.classList.remove("hidden");
  setTimeout(() => container.classList.add("hidden"), 3000);
}
