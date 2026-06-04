/* ui/components/students-card.js */

import { iconSave } from "../assets/icons/save.js";
import { iconTrash } from "../assets/icons/trash.js";
import { iconUpload } from "../assets/icons/upload.js";

class StudentsCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="card estudiantes-section">
        <div class="section-header">
          <h2 class="section-label">Estudiantes</h2>
          <div class="section-actions">
            <input type="file" id="inputCsv" class="input-file" accept=".csv,text/csv" />
            <button id="btnCargarCsv" class="btn btn-outline" type="button">
              ${iconUpload()}
              Cargar CSV
            </button>
            <button id="btnGuardar" class="btn btn-primary" type="button">
              ${iconSave()}
              Guardar registros
            </button>
          </div>
        </div>
        <div id="guardar-registros" class="guardar-mensaje hidden"></div>
        <div id="tabla-estudiantes" class="tabla-wrapper">
          <p class="loading-text">Cargando estudiantes…</p>
        </div>
        <div class="section-footer">
          <button id="btnLimpiarRegistros" class="btn btn-danger" type="button">
            ${iconTrash()}
            Limpiar datos locales
          </button>
        </div>
      </section>
    `;
  }
}

customElements.define('students-card', StudentsCard);
