# Sistema Cromático y Paleta de Colores Corporativos

Este documento especifica los tokens de color corporativos oficiales de la marca *"Tecnologías Programables"* y sus normativas de contraste sobre componentes de interfaz digital.

---

## 🎨 1. Colores Oficiales (Tokens CSS)

Basado en la **página 007** del manual, los colores oficiales se definen en el archivo global `ui/css/base.css` bajo las siguientes variables:

*   **Naranja Principal (Pantone 1585 C)**:
    *   **Hex**: `#FF6B0B`
    *   **HSL**: `hsl(24, 100%, 52%)`
    *   **Variable**: `--brand-orange`
    *   *Propósito*: Botones de acción principal (guardar, añadir), bordes e indicadores destacados.
*   **Cian Secundario (Pantone 298 C)**:
    *   **Hex**: `#24AEE5`
    *   **HSL**: `hsl(197, 79%, 52%)`
    *   **Variable**: `--brand-cyan`
    *   *Propósito*: Acercamientos interactivos (nodos de circuitos), badges de participación de alumnos y acentos activos.
*   **Magenta Detalle (Pantone 674 C)**:
    *   **Hex**: `#C32986`
    *   **HSL**: `hsl(324, 65%, 46%)`
    *   **Variable**: `--brand-magenta`
    *   *Propósito*: Isotipo de marca, elementos decorativos de podio (3° lugar) y áreas de información destacada.

---

## 🌗 2. Neutros y Fondos de Interfaz

Para mantener la estética premium y evitar el uso de grises aburridos, se implementa una paleta de neutros cálidos inspirada en la arena:

*   **Crema Ultra Suave (`--brand-sand-light` - `#FAF7F4`)**: Fondo general de la aplicación. Ojo y lectura descansada.
*   **Arena Soft (`--brand-sand` - `#EDE3DA`)**: Fondo para encabezados de sección y bordes suaves de tarjetas.
*   **Carbón Oscuro (`--brand-dark` - `#1E293B`)**: Color para tipografías principales e inputs. Garantiza legibilidad 100%.

---

## 📐 3. Reglas Obligatorias de Contraste (Páginas 011 y 012)

El manual prohíbe explícitamente ciertas combinaciones de texto y fondo que comprometan la legibilidad de la marca. Se implementan dos clases de utilidad oficiales:

### A. Fondo Magenta (`.bg-brand-magenta`) - Página 011
Cuando una sección o bloque de alerta lleva fondo magenta:
*   **Texto Principal**: Debe ser blanco puro (`--brand-white`).
*   **Acentos y Destacados**: Deben ser **Cian** (`--brand-cyan`).
*   **Botones Secundarios**: Deben ser delineados en blanco con fondo transparente.

### B. Fondo Cian (`.bg-brand-cyan`) - Página 012
Cuando un elemento de interfaz se renderice sobre fondo cian:
*   **Texto Principal**: **Obligatoriamente oscuro** (`--brand-dark`). Está prohibido usar texto blanco sobre fondo cian ya que no pasa los estándares de accesibilidad WCAG AA.
*   **Botones**: Deben llevar fondo oscuro (`--brand-dark`) con texto claro.
