# Gestión de la Iconoteca Atómica

Para cumplir estrictamente con el **Principio de Responsabilidad Única (SRP)** y mantener un código limpio libre de ruido visual (coordenadas de vectores largas), todos los iconos vectoriales SVG del sistema se declaran en archivos JS independientes y de forma atómica.

---

## 🏗️ 1. Estructura de la Carpeta de Iconos

Todos los iconos residen bajo la ruta:
`ui/assets/icons/`

Cada archivo contiene exactamente **un único icono** (o un set cerrado de la misma familia, como las medallas de podio):

```
ui/assets/icons/
├── logo.js            # Logotipo corporativo
├── arrow-left.js      # Navegación hacia atrás
├── save.js            # Acción de guardar
├── trophy.js          # Copa del Leaderboard
├── check.js           # Icono de alerta exitosa
└── medals.js          # Insignias de podium (Oro, Plata, Bronce)
```

> [!NOTE]
> **Excepción del Logotipo (`logo.js`)**: El logotipo principal corporativo no es un icono SVG inline estándar. Es el punto de entrada hacia una serie de assets generados dinámicamente mediante un motor de compilación para asegurar el cumplimiento estricto del manual de marca. Para conocer la arquitectura de su generación, revisa [LOGO_PIPELINE.md](LOGO_PIPELINE.md).

---

## 🛠️ 2. Cómo Crear un Icono Nuevo

Si necesitas agregar un nuevo icono (por ejemplo, `edit.js` para editar):

1.  Crea el archivo `ui/assets/icons/edit.js`.
2.  Declara una constante exportable como una **función flecha parametrizada** (esto permite pasarle el tamaño en píxeles u otros parámetros visuales).
3.  Escribe el código SVG y retorna la plantilla de texto.

### Estructura de `ui/assets/icons/edit.js`:
```javascript
export const iconEdit = (size = 16) => `
  <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
`;
```

---

## 🔍 3. Cómo Utilizar el Icono en un Componente

Simplemente importa la función en tu componente web y ejecútala dentro de la plantilla HTML literal:

```javascript
import { iconEdit } from "../assets/icons/edit.js";

class StudentsCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="card">
        <button class="btn btn-action">
          ${iconEdit(18)} <!-- Icono edit renderizado con tamaño 18px -->
          Editar Perfil
        </button>
      </div>
    `;
  }
}
```

---

## 🚀 4. Pautas de Diseño Vectorial
*   **Minimalismo**: Utiliza iconos de trazo lineal (`fill="none" stroke="currentColor"`). Esto permite que el icono adopte automáticamente el color del texto del botón o tarjeta donde se inyecta.
*   **Parámetro `size` por Defecto**: Todos los iconos de interfaz deben llevar un tamaño por defecto de `16px`.
*   **Alineación**: Asegura que el SVG lleve `display: block;` para evitar desalineaciones verticales de texto comunes en navegadores.
