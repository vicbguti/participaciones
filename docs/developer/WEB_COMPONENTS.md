# Desarrollo de Web Components Nativos (Vanilla JS)

Este proyecto utiliza **Web Components Nativos** para evitar tener un archivo `index.html` monolítico y facilitar la modularización completa de la UI sin requerir frameworks externos (React, Vue) ni internet.

---

## 🧱 1. Concepto de Componente Web Nativo

Un Web Component nativo es un elemento personalizado registrado en el motor del navegador. Permite encapsular maquetación HTML y comportamiento bajo una etiqueta personalizada, como `<brand-header>` o `<students-card>`.

*   **Ubicación**: Todos los componentes residen en `ui/components/`.
*   **Independencia**: No llevan Shadow DOM para integrarse perfectamente con las hojas de estilo modulares de `ui/css/`.

---

## 🛠️ 2. Estructura y Creación de un Componente

Para crear un nuevo componente (por ejemplo, una sección de estadísticas `<stats-card>`):

1.  Crea el archivo `ui/components/stats-card.js`.
2.  Define una clase que extienda de `HTMLElement`.
3.  Define el método de ciclo de vida `connectedCallback()` para renderizar el HTML.
4.  Registra la etiqueta con `customElements.define()`.

### Plantilla Base:
```javascript
/* ui/components/stats-card.js */

class StatsCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="card stats-section">
        <h2 class="section-label">Estadísticas</h2>
        <div class="stats-grid">
          <p>Total alumnos cargados...</p>
        </div>
      </section>
    `;
  }
}

// El nombre de la etiqueta debe llevar obligatoriamente un guión (-)
customElements.define('stats-card', StatsCard);
```

---

## 📄 3. Importación y Uso en HTML

Para usar tu nuevo componente en la vista:

1.  **Enlaza el script como módulo** en el `<head>` de tu archivo HTML:
    ```html
    <script type="module" src="ui/components/stats-card.js"></script>
    ```
2.  **Escribe la etiqueta declarativa** donde desees pintarla:
    ```html
    <main class="app-main">
      <search-filters></search-filters>
      <stats-card></stats-card> <!-- Tu nuevo componente -->
      <students-card></students-card>
    </main>
    ```

---

## 🚀 4. Buenas Prácticas

1.  **Cero XML/SVG Duplicado**: Nunca escribas código SVG extenso dentro de las plantillas. Importa los iconos de forma atómica desde `ui/assets/icons/`.
2.  **Estilos desacoplados**: No apliques estilos inline pesados. Crea un archivo de estilos (por ejemplo, `ui/css/components/stats.css`), escribe tus clases CSS, e impórtalo en tu archivo centralizador `ui/css/main.css`.
