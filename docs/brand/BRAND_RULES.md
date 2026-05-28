# Reglas de Uso de Marca e Integridad Visual

Este documento detalla los lineamientos del manual de identidad corporativa en relación con los márgenes de seguridad, escalas mínimas de visualización en pantalla y elementos temáticos de la marca.

---

## 📐 1. Área de Exclusión Mínima (Páginas 008 y 009)

El manual estipula de forma estricta que el logotipo corporativo debe respirar y estar libre de cualquier elemento gráfico, texto o borde que invada su espacio de exclusión. 

*   **Definición**: El área de exclusión está determinada por la altura de la caja de marca.
*   **Traducción Técnica**: Creamos la variable CSS `--brand-safe-zone: 1.5rem;`.
*   **Aplicación**: Todos los contenedores principales y cabeceras que lleven el logo deben aplicar un padding o margen equivalente a esta zona para garantizar que ningún elemento roce el logotipo:
    ```css
    .app-header {
      padding: var(--brand-safe-zone) calc(var(--brand-safe-zone) * 1.5);
    }
    ```

---

## 🔍 2. Escala Mínima de Reproducción (Página 010)

Para asegurar la legibilidad del eslogan de la marca digitalmente, el logotipo combinado horizontal de *Tecnologías Programables* nunca debe renderizarse por debajo de las siguientes medidas mínimas en pantallas web:

*   **Altura Mínima**: `70px`
*   **Ancho Mínimo**: `295px`
*   **Ajuste CSS**:
    ```css
    .brand-logo {
      height: 70px;
      width: auto;
      min-height: 70px;
      object-fit: contain;
    }
    ```

---

## 🎛️ 3. Estética Temática (Nodos de Circuito)

El isotipo oficial incorpora terminaciones en líneas continuas que rematan en **nodos de circuitos celestes**. Para emular visualmente este diseño en la interfaz digital, se ha integrado en los componentes interactivos principales:

*   **El Nodo en Botones (`.btn-primary`)**: 
    Al hacer hover en los botones de acción naranja, el botón se desplaza suavemente a la derecha revelando un **punto celeste brillante** (`--brand-cyan`) con efecto de sombra resplandeciente (`box-shadow`), simulando una conexión de nodo de circuito activa en la placa base del sistema.
*   **Animación de Badges (`.participaciones-badge`)**: 
    Al registrar una participación, el badge del alumno destella temporalmente en color naranja y se infla de tamaño para indicar de forma interactiva el paso de energía o suma de datos en el sistema.
