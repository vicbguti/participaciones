# Data Flow

1. **Carga Inicial** – El navegador abre `index.html`, registra los Web Components nativos (`<brand-header>`, etc.) y ejecuta `main.js`.
2. **Renderizado** – `main.js` llama a la fachada `renders.js`, que delega en `ui/renders/estudiantes.js`. Este módulo usa plantillas atómicas de `ui/templates/estudiantes.js` y genera la tabla inyectándola en el DOM.
3. **Interacción** – Los botones **+** / **‑** disparan los manejadores en `participaciones.js` (`handleMarcarParticipacion`, `handleQuitarParticipacion`). Cada llamada:
   - Actualiza la lógica del controlador (`estudiante.js`).
   - Persiste la lista en `localStorage` mediante `registrosCsv.guardarEstudiantesLocalmente`.
   - Llama a `updateParticipacion` (en `ui/renders/estudiantes.js`) para refrescar el badge del alumno.
4. **Persistencia** – Cuando el usuario pulsa **Guardar**, `registrosCsv.saveCsvToFile()` genera un CSV y lo descarga.
5. **Filtro y Limpieza** – `handleFiltroEstudiantes` y `handleLimpiarRegistros` usan el controlador y el CSV para actualizar la vista.

Este flujo garantiza que la UI, el controlador y el almacenamiento local siempre estén sincronizados.
