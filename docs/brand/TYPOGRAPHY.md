# Sistema Tipográfico y Licenciamiento

Este documento detalla las normativas tipográficas de *"Tecnologías Programables"*, la resolución de restricciones legales de licencia y la configuración técnica para funcionamiento offline.

---

## ⚖️ 1. Restricción de Licencia de "Good Times" (Página 013)

La tipografía oficial de la identidad corporativa es **`Good Times`** (`GoodTimesRg-Regular`) de *Typodermic Fonts Inc.*

### La Cláusula Legal:
La licencia de uso de escritorio gratuita provista por el diseñador:
*   **Permite**: Uso en logotipos, diseño gráfico de banners en Photoshop/Figma, marcas registradas y stickers.
*   **Prohíbe**: La **incrustación web (web page embedded)**. Esto significa que **es ilegal** subir los archivos `.ttf`/`.woff` de *Good Times* a tu carpeta web para que el navegador los descargue usando `@font-face`.

---

## 🎨 2. Soluciones Técnicas de Cumplimiento

### A. Para el Logotipo Principal (SVG Vectorial Local)
Para exhibir la tipografía oficial `Good Times` de forma totalmente legal en la web, el logotipo corporativo ha sido vectorizado en curvas SVG e incrustado directamente en el componente `<brand-header>`.
*   Al estar vectorizado (dibujado con coordenadas vectoriales), el navegador no descarga el archivo tipográfico `.ttf`, por lo que **cumple al 100% con la licencia de marca sin infringir derechos de autor**.

### B. Para Texto Dinámico en HTML (Syncopate y Outfit)
Para los textos dinámicos (títulos de secciones, leaderboard, nombres y botones) que no pueden ser vectorizados previamente, se utilizan alternativas de **Google Fonts** bajo la licencia libre *SIL Open Font License*:

1.  **`Syncopate`** (Títulos): 
    *   Una fuente sans-serif extendida, pesada y de corte futurista/tecnológico.
    *   **Proporción idéntica**: Sus anchos y proporciones geométricas emulan casi a la perfección el estilo de `Good Times` en pantalla.
2.  **`Outfit`** (Cuerpo de texto y números):
    *   Fuente sans-serif geométrica de legibilidad superior para tablas, listas de clasificación y formularios.

---

## 📡 3. Configuración para Funcionamiento Offline-First

Para que la tipografía cargue al instante y de forma 100% autónoma en el campo sin conexión a internet, **no enlazamos CDNs externos**. Las fuentes deben residir localmente en:

`ui/assets/fonts/`

### Declaración en `base.css`:
```css
/* Fuente para títulos en mayúsculas */
@font-face {
  font-family: 'Syncopate';
  src: url('../assets/fonts/Syncopate-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Fuente para el cuerpo del sitio */
@font-face {
  font-family: 'Outfit';
  src: url('../assets/fonts/Outfit-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```
