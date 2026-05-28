/* ui/assets/icons/logo/builder/config.js */
/* SINGLE SOURCE OF TRUTH — Editar textos, colores y posiciones aquí */

export const config = {
  // Styling of the outer generated logo SVG
  container: {
    height: '56px', // Scaled down to fit harmoniously in standard web UI headers
    padding: { top: 4, right: 30, bottom: 4, left: 4 }, // Padding inside the viewBox
  },

  // Dimensions of the Isotipo symbol
  symbol: {
    width: 99.2,
    height: 77.0, // Mathematically derived so TP icon bounds perfectly match text bounds
  },

  // Typography layout settings
  textLayout: {
    title: {
      tecnologias: {
        label:     'TECNOLOGÍAS',
        fill:      '#24AEE5',
        translate: [115, 26.8], // [x, y] (y is the baseline)
        scale:     0.24,
      },
      programables: {
        label:     'PROGRAMABLES',
        fill:      '#24AEE5',
        translate: [115, 45.8],
        scale:     0.24,
      },
    },
    slogan: {
      line1: {
        label:     'PARA EL DESARROLLO DEL',
        fill:      '#1E293B',
        translate: [115, 61.8],
        scale:     0.17,
      },
      line2: {
        label:     'PENSAMIENTO COMPUTACIONAL',
        fill:      '#1E293B',
        translate: [115, 75.5],
        scale:     0.17,
      },
    },
  }
};
