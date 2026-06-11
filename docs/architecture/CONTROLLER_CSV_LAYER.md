# Controller & CSV Layer

The core business logic lives in two lightweight classes:

* **`EstudiantesController`** (`estudiante.js`)
  - Mantiene la lista de estudiantes en memoria (`this.estudiantes`).
  - Provee operaciones para incrementar/decrementar participaciones, filtrar, buscar y obtener un estudiante por id.
  - No conoce nada de la UI ni del almacenamiento; su único propósito es la gestión del estado.

* **`RegistrosCsv`** (`registrosCsv.js`)
  - Encapsula todo lo relacionado con el **almacenamiento persistente**.
  - Usa `localStorage` bajo la clave `participaciones.estudiantes` para leer y escribir la lista completa.
  - Ofrece métodos para cargar desde archivo CSV, exportar a CSV, obtener un *leaderboard* y, crucialmente, **`addStudent`** que crea un id único y persiste el nuevo registro.

En `participaciones.js` se exportan instancias únicas de ambos:

```javascript
export const estudiantesController = new EstudiantesController();
export const registrosCsv = new RegistrosCsv(PLANTILLA, CURSO);
```

Esta fachada permite que cualquier módulo (por ejemplo `ui/renders/estudianteForm.js` o `ui/renders/estudiantes.js`) acceda a la lógica de negocio y al almacenamiento sin crear dependencias circulares.
