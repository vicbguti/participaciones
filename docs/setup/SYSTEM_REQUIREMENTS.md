# Requerimientos de Entorno y Ejecución Local

Esta guía describe los requisitos mínimos para ejecutar el sistema de control de asistencia localmente en zonas sin conexión a internet y cómo levantar servidores de desarrollo ultra livianos.

---

## 💻 1. Requerimientos del Navegador

Al estar desarrollado en código estándar de ECMAScript y con Web Components nativos, el sistema es compatible con cualquier navegador web moderno sin requerir extensiones:

*   **Google Chrome**: Versión 67 o superior.
*   **Mozilla Firefox**: Versión 63 o superior.
*   **Microsoft Edge**: Versión 79 o superior.
*   **Safari**: Versión 11.1 o superior.

*Nota: La aplicación requiere un navegador con soporte de JavaScript Modules (`type="module"`), lo cual está soportado de forma nativa en el 98% de los navegadores actuales.*

---

## ⚙️ 2. Levantamiento de Servidor HTTP Local (Obligatorio)

Dado que los navegadores modernos aplican estrictas medidas de seguridad (CORS) que prohíben cargar JavaScript Modules locales usando el protocolo `file://` (abriendo el archivo directamente con doble clic), **es obligatorio abrir la aplicación a través de un servidor HTTP local**.

Aquí tienes tres alternativas muy simples que no requieren internet para levantar tu servidor local en segundos:

### Opción A: Servidor en Python (Recomendada si usas Linux/Mac)
Casi todos los sistemas operativos tienen Python preinstalado. 

1.  Abre una terminal en la carpeta raíz del proyecto (`asistencia/`).
2.  Ejecuta el siguiente comando según tu versión de Python:
    *   **Python 3**:
        ```bash
        python -m http.server 8000
        ```
    *   **Python 2**:
        ```bash
        python -m SimpleHTTPServer 8000
        ```
3.  Abre tu navegador y navega a: `http://localhost:8000`

### Opción B: Extensión "Live Server" de VS Code (Para diseñadores)
Si editas tu código usando Visual Studio Code:
1.  Busca e instala la extensión llamada **Live Server** (creada por Ritwick Dey).
2.  Haz clic en el botón **"Go Live"** en la esquina inferior derecha de VS Code.
3.  El navegador se abrirá automáticamente en la dirección correcta.

### Opción C: Ejecución local con Node.js (Si tienes node instalado)
Si ya cuentas con Node.js en la máquina:
1.  Instala un servidor estático rápido globalmente una sola vez:
    ```bash
    npm install -g http-server
    ```
2.  Levanta el servidor en la raíz de tu proyecto:
    ```bash
    http-server -p 8000
    ```
3.  Navega a: `http://localhost:8000`
