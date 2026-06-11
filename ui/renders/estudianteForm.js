// ui/renders/estudianteForm.js
// Minimal inline form to add a new student and refresh the table.

import { renderEstudiantes } from "./estudiantes.js";
import { registrosCsv } from "../../participaciones.js";

/**
 * Render a simple form for adding a student.
 * The form is appended to the given container (the same container that holds the table).
 */
export function renderAddStudentForm(container) {
  // Avoid adding multiple forms if one already exists.
  const existing = container.querySelector(".add-student-container");
  if (existing) return;

  const wrapper = document.createElement("div");
  wrapper.className = "add-student-container";

  const form = document.createElement("form");
  form.id = "add-student-form";
  form.className = "add-student-form";
  form.innerHTML = `
    <h3 class="section-label">Agregar estudiante</h3>
    <div class="add-student-row">
      <div class="add-student-group">
        <label>Nombre</label>
        <input type="text" name="nombre" class="input" placeholder="Nombre..." required />
      </div>
      <div class="add-student-group">
        <label>Apellido</label>
        <input type="text" name="apellido" class="input" placeholder="Apellido..." required />
      </div>
      <div class="add-student-group">
        <label>Participaciones</label>
        <input type="number" name="participaciones" min="0" value="0" class="input" required />
      </div>
    </div>
    <div class="add-student-actions">
      <button type="submit" class="btn btn-primary">Agregar estudiante</button>
    </div>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nuevo = {
      nombre: data.get("nombre"),
      apellido: data.get("apellido"),
      participaciones: Number(data.get("participaciones"))
    };
    try {
      const added = registrosCsv.addStudent(nuevo);
      // Reload the stored list and re‑render the table.
      const estudiantes = registrosCsv.cargarEstudiantesGuardados();
      renderEstudiantes(estudiantes);
      form.reset();
    } catch (err) {
      console.warn("Error al agregar estudiante:", err);
    }
  });

  wrapper.appendChild(form);
  container.appendChild(wrapper);
}
