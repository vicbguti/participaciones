/* ui/renders/estudiantes.js */

import { buildFilaTablaEstudiante, buildTablaHeader } from "../templates/estudiantes.js";

export function renderEstudiantes(estudiantes) {
  console.log("Renderizando estudiantes:", estudiantes);
  const container = renderEstudiantesContainer(estudiantes);
  if (!container || estudiantes.length === 0) return;

  const table = document.createElement("table");
  table.className = "tabla-estudiantes";

  const thead = document.createElement("thead");
  thead.innerHTML = buildTablaHeader();
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  estudiantes.forEach(e => {
    const tr = document.createElement("tr");
    tr.innerHTML = buildFilaTablaEstudiante(e);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  container.appendChild(table);

  // Re-enlazar event listeners para soporte offline robusto
  // (En caso de que main.js no use delegación, garantizamos que los nuevos botones funcionen)
  rebindParticipacionEvents(container);
}

export function updateParticipacion(estudianteId, numParticipacion) {
  const badge = document.getElementById(`participaciones-${estudianteId}`);
  if (!badge) return;
  badge.textContent = numParticipacion;
  badge.classList.add("participaciones-updated");
  setTimeout(() => badge.classList.remove("participaciones-updated"), 500);
}

function renderEstudiantesContainer(estudiantes) {
  const container = document.getElementById("tabla-estudiantes");
  if (!container) return null;

  container.innerHTML = "";

  if (estudiantes.length === 0) {
    container.innerHTML = '<p class="no-resultados">No se encontraron estudiantes.</p>';
    return null;
  }

  return container;
}

// Helper interno para re-enlazar eventos a los nuevos botones en filtros dinámicos
function rebindParticipacionEvents(container) {
  // Importamos dinámicamente los handlers para evitar dependencias circulares
  import("../../participaciones.js").then((module) => {
    const masBtns = container.querySelectorAll(".btn-mas");
    masBtns.forEach(btn => {
      btn.onclick = () => module.handleMarcarParticipacion(Number(btn.dataset.estudianteId));
    });

    const menosBtns = container.querySelectorAll(".btn-menos");
    menosBtns.forEach(btn => {
      btn.onclick = () => module.handleQuitarParticipacion(Number(btn.dataset.estudianteId));
    });
  }).catch(err => {
    console.warn("No se pudieron rebindear eventos dinámicos (esperado en páginas sin participaciones.js):", err);
  });
}
