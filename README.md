# Buenas prácticas React + MUI

## Estructura
- `/components`: componentes reutilizables
- `/style`: estilos por componente
- `/utils`: validaciones, efectos

## Convenciones
- Componentes: `PascalCase.jsx`
- Validaciones: usar `prop-types` o TypeScript

## MUI
- Uso `sx` para estilos directos
- Uso `ThemeProvider` para personalizar colores, tipografías, etc.
- Uso `Grid`, `Box`, y `Container` para diseño responsivo

## Accesibilidad
- Uso `alt` en imágenes
- Uso etiquetas `<label>` correctamente
- Uso `aria-*` si aplican para sliders, modales, etc.

## Usabilidad
- Formularios claros, con feedback visual (`helperText`, `error`)
- Navegación simple e intuitiva
