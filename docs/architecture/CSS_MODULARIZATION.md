# CSS Modularization

En la raíz del proyecto se mantiene `styles.css` únicamente como **puente** que delega la carga completa de estilos a la nueva arquitectura CSS modularizada.

```css
@import "./ui/css/main.css";
```

- `ui/css/main.css` agrupa los importes de los archivos de componentes (`buttons.css`, `add-student-form.css`, etc.).
- Cada componente visual tiene su propio archivo bajo `ui/css/components/` para mantener la separación de responsabilidades y permitir micro‑animaciones y temas oscuros sin colisiones.
- Esta estrategia permite que cualquier página que siga enlazando a `styles.css` continúe funcionando sin modificaciones, mientras que la verdadera fuente de estilos está estructurada de forma escalable.
