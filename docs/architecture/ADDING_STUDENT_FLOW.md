# Adding Student Flow

This file documents the complete lifecycle when a user adds a new student through the inline form.

## 1️⃣ UI – Render the Form
- `ui/renders/estudianteForm.js` exports `renderAddStudentForm(container)`.
- The function creates a `<form id="add-student-form">` with three inputs: **Nombre**, **Apellido**, **Participaciones**.
- After the table is rendered, `renderEstudiantes` calls `renderAddStudentForm(container)` so the form appears directly below the table.

## 2️⃣ Submit Handler
```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nuevo = {
    nombre: data.get("nombre"),
    apellido: data.get("apellido"),
    participaciones: Number(data.get("participaciones"))
  };
  // ---------- Core steps ----------
  const added = registrosCsv.addStudent(nuevo);
  // Keep the in‑memory controller in sync with persisted data
  estudiantesController.setEstudiantes(registrosCsv.cargarEstudiantesGuardados());
  // Re‑render the table with the freshly loaded list
  const estudiantes = registrosCsv.cargarEstudiantesGuardados();
  renderEstudiantes(estudiantes);
  form.reset();
});
```

### What each line does
1. **`registrosCsv.addStudent(nuevo)`** – creates a unique ID, validates fields, stores the new student in `localStorage` and returns the created object.
2. **`estudiantesController.setEstudiantes(...)`** – updates the controller’s internal `estudiantes` array so any later calls (e.g., participation buttons) work on the latest data.
3. **`cargarEstudiantesGuardados()`** – reads the persisted list back (ensuring the UI reflects exactly what is saved).
4. **`renderEstudiantes(estudiantes)`** – rebuilds the table, re‑binding the +/‑ button events.
5. **`form.reset()`** – clears the inputs for the next entry.

## 3️⃣ Interaction with the Rest of the System
- The **Facade** (`participaciones.js`) exposes `estudiantesController` and `registrosCsv` as singletons, so the form module can import them without creating circular dependencies.
- After the form adds a student, the normal **Data Flow** (see `DATA_FLOW.md`) resumes: any subsequent participation clicks go through `handleMarcarParticipacion` / `handleQuitarParticipacion`, which update the controller, persist the change, and call `updateParticipacion` to flash the badge.

## 4️⃣ Edge‑Case handling
- Validation throws an error if *nombre* or *apellido* are missing, or if the participation count is not a non‑negative integer. The `try/catch` in the submit handler logs a warning and prevents the UI from breaking.
- Because the controller is refreshed from storage after each addition, the system remains robust even if multiple tabs are open – each tab will load the latest state on its next render.

---

**Result:** Adding a student now updates *both* the persistent CSV storage and the in‑memory controller, guaranteeing that the UI, controller, and CSV layer stay perfectly synchronized.
