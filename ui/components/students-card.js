/* ui/components/students-card.js */

import { iconSave } from "../assets/icons/save.js";

class StudentsCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="card estudiantes-section">
        <div class="section-header">
          <h2 class="section-label">Estudiantes</h2>
          <button id="btnGuardar" class="btn btn-primary">
            ${iconSave()}
            Guardar registros
          </button>
        </div>
        <div id="guardar-registros" class="guardar-mensaje hidden"></div>
        <div id="tabla-estudiantes" class="tabla-wrapper">
          <p class="loading-text">Cargando estudiantes…</p>
        </div>
      </section>
    `;
  }
}

customElements.define('students-card', StudentsCard);
