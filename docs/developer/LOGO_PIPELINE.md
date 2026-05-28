# Arquitectura y Pipeline del Logotipo

El logotipo de la marca está completamente automatizado y se genera en tiempo de compilación (*build-time*) para garantizar una alineación matemática y de píxeles perfecta, sin sobrecargar la interfaz de usuario (UI) en tiempo de ejecución. La arquitectura se divide entre los **Assets Generados** y el **Constructor Modular (Builder)**.

## Estructura de Directorios

```text
ui/assets/icons/logo/
├── index.js                    # Cargador de assets ligero para la UI. Sin lógica de renderizado.
├── favicon-composed.svg        # [GENERADO] Icono sin bordes (solo el circuito)
├── symbol-composed.svg         # [GENERADO] Icono con bordes (marco + circuito)
├── logo-composed.svg           # [GENERADO] Logo completo (marco + circuito + tipografía)
│
└── builder/                    # El Pipeline de Compilación en Node.js
    ├── config.js               # Única Fuente de Verdad para layout, colores, padding y escalas
    ├── generate.js             # El Orquestador / Punto de entrada CLI (Ejecutar: `node generate.js`)
    │
    ├── source/                 # Componentes gráficos vectoriales puros
    │   ├── circuit.svg         # El trazado vectorial puro "TP" (sin límites)
    │   └── frame.svg           # La caja de construcción magenta pura
    │
    ├── fonts/                  # Assets tipográficos usados por el motor de fuentes
    │   └── good-times-rg.otf   
    │
    ├── core/                   # Motores de utilidad aislados y reutilizables
    │   ├── font-engine.js      # Maneja opentype.js y la extracción exacta de bounding-boxes
    │   ├── svg-parser.js       # Lee y extrae de forma segura el viewBox/contenido de los SVGs
    │   └── composer.js         # Funciones puras para envolver fragmentos SVG en XML estándar
    │
    └── variants/               # Recetas de Salida (Altamente Extensibles)
        ├── Favicon.js          # Ensambla el circuito crudo (favicon-composed.svg)
        ├── Symbol.js           # Superpone marco + circuito (symbol-composed.svg)
        └── LogoHorizontal.js   # Superpone marco + circuito + tipografía (logo-composed.svg)
```

## Cómo usar el Pipeline

- **Para actualizar el diseño:** Nunca edites manualmente los archivos `-composed.svg`. Actualiza `builder/config.js` o los componentes en `builder/source/`.
- **Para recompilar:** Navega a `ui/assets/icons/logo/builder` y ejecuta `node --experimental-vm-modules generate.js`.
- **Para extender:** Para agregar un nuevo layout (ej. un logo vertical apilado), crea una nueva receta en `builder/variants/` e impórtala en `generate.js`. No modifiques las recetas existentes.
