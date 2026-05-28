# Receta para Configuración de Recursos Offline-First

Este documento provee una guía paso a paso muy simple para descargar los recursos tipográficos necesarios e instalarlos de forma local en la carpeta del proyecto, garantizando que el sistema funcione en zonas rurales sin conexión a internet.

---

## 📥 Paso 1: Descargar los Archivos de Fuentes

Para cumplir con el diseño offline, debemos hospedar localmente las fuentes abiertas aprobadas por la marca. Necesitas descargar los siguientes archivos tipográficos en formato **`.woff2`** (el estándar web más optimizado y liviano):

1.  **Syncopate (Para Títulos)**:
    *   [Descargar Syncopate en Google Fonts](https://fonts.google.com/specimen/Syncopate)
    *   Necesitas el archivo: **`Syncopate-Bold.woff2`**
2.  **Outfit (Para Cuerpo de Texto y Números)**:
    *   [Descargar Outfit en Google Fonts](https://fonts.google.com/specimen/Outfit)
    *   Necesitas los archivos: **`Outfit-Regular.woff2`** y **`Outfit-Bold.woff2`**

---

## 📂 Paso 2: Colocar los Archivos en la Estructura

Una vez descargados, mueve los archivos `.woff2` a la siguiente carpeta del proyecto:

`ui/assets/fonts/`

La estructura resultante debe verse exactamente así:

```
asistencia/
└── ui/
    └── assets/
        └── fonts/
            ├── Syncopate-Bold.woff2
            ├── Outfit-Regular.woff2
            └── Outfit-Bold.woff2
```

---

## ⚡ Paso 3: Verificación Offline

Para auditar y garantizar que tu sistema de asistencia no esté realizando llamadas externas a internet al abrir la aplicación:

1.  Abre la aplicación en tu navegador web local (usando tu servidor local).
2.  Presiona **F12** (o Click Derecho -> Inspeccionar) para abrir las Herramientas de Desarrollador.
3.  Pásate a la pestaña **Network** (Red).
4.  Activa la casilla **Offline** (Sin conexión) en la barra de herramientas de la pestaña Network.
5.  Recarga la página (**Ctrl + F5** para limpiar caché).
6.  **Resultado Esperado**:
    *   La página debe cargar instantáneamente en menos de `50ms`.
    *   El logotipo vectorial en SVG debe lucir nítido e impecable.
    *   Los textos de títulos y del cuerpo deben renderizarse con las tipografías *Syncopate* y *Outfit* descargadas localmente.
    *   En la consola o pestaña de red no debe figurar ningún error de carga bloqueante (cero peticiones fallidas a CDNs de Google Fonts).
