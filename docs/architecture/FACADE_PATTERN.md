# Facade Pattern

Para asegurar la **compatibilidad absoluta con la lógica existente** conservamos los archivos de entrada originales en la raíz del proyecto, pero los convertimos en simples **puentes redireccionadores**:

1. **`renders.js` (Raíz)**
   - Actúa como fachada.
   - Importa las funciones modularizadas desde `ui/renders/` y las vuelve a exportar con la misma firma original.
   - Permite que `participaciones.js` y `main.js` sigan usando la API de pintado sin cambios.

2. **`styles.css` (Raíz)**
   - Redirige la carga de estilos a la nueva arquitectura CSS modularizada mediante una única directiva:
   ```css
   @import "./ui/css/main.css";
   ```
   - Así el proyecto sigue cargando `styles.css` como antes, pero el contenido real vive en `ui/css/`.
