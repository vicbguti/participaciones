# UI Rendering Pipeline

The UI layer lives under `ui/` and follows a **component‑first** approach:

* **`ui/templates/`** – Pure HTML snippets (template literals) for table rows, headers, and any static markup. No logic, only markup.
* **`ui/renders/`** – Functions that *render* those templates into the DOM. They are pure‑functions that receive data and return rendered elements. The main modules are:
  - `estudiantes.js` – Builds the student table, injects it into `#tabla-estudiantes`, and calls `renderAddStudentForm` (the add‑student form) after the table.
  - `estudianteForm.js` – Creates the inline *Add Student* form, wires the `submit` event, and calls the controller / CSV layer.
  - `estudiante.js` – (optional) could hold UI helpers for individual student cards.
* **`ui/components/`** – Real Web Components (e.g., `<brand-header>`, avatars, badges) that encapsulate their own shadow‑DOM and styling.
* **`ui/css/`** – All styles are split per component (`buttons.css`, `add-student-form.css`, etc.) and imported by `ui/css/main.css`.

**Event rebinding**

Because the table can be re‑rendered at any time (filtering, add/remove), `ui/renders/estudiantes.js` includes a helper `rebindParticipacionEvents(container)` that dynamically imports `../../participaciones.js` and attaches `onclick` handlers to the ".btn‑mas" and ".btn‑menos" buttons. This avoids circular dependencies while keeping the UI responsive in an offline‑first scenario.

**Interaction flow**
1. `main.js` → `renders.js` (facade) → `ui/renders/estudiantes.js` → builds table.
2. Table rows contain buttons with `data-estudiante-id` attributes.
3. `rebindParticipacionEvents` wires those buttons to the controller functions (`handleMarcarParticipacion`, `handleQuitarParticipacion`).
4. Any state change triggers `updateParticipacion` to refresh the badge with a brief CSS flash.

The pipeline is deliberately **stateless** on the UI side: the source of truth resides in `estudiantesController` and `registrosCsv`. The render functions simply reflect that state.
