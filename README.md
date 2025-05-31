# Proyecto Landing Page React + MUI

Este proyecto es una landing page desarrollada con React y Material-UI (MUI), diseñada para ser responsiva, accesible y fácil de usar. La aplicación cuenta con componentes reutilizables, navegación interactiva, un formulario de contacto, y un carrusel de imágenes que se adapta a distintos dispositivos.

## Proxy
- Utilizacion de proxy: https://cors-anywhere.herokuapp.com/corsdemo para la carga de los endpoints utilizados en: Quienes somos, Productos/Servicios y Preguntas Frecuentes. 

## Estructura
- `/components`: componentes reutilizables
- `/style`: estilos por componente
- `/utils`: validaciones, efectos
- `/public`: Archivos estáticos públicos (imágenes, favicon, index.html).
- `/App.jsx`: Componente raíz donde se integran los componentes principales y se controla el tema (modo claro/oscuro).
- `/main.jsx`: Punto de entrada que renderiza la aplicación.
- Utilizacion

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

## Instalación y ejecución
1. Clona el repositorio: git clone https://github.com/FelipeAguirreA/desarrollo-frontend3.git
2. Accede a la carpeta del proyecto: cd desarrollo-frontend3
3. Instala las dependencias: npm install
4. Ejecuta el servidor de desarrollo: npm run dev
5. Abre en el navegador la URL indicada (por defecto http://localhost:3000).

## Uso de componentes clave
- **ServiceCard**: Muestra imagen, título, descripción y botón "Contáctanos". El botón lleva al formulario de contacto rellenando el campo “producto” según la tarjeta seleccionada.
- **ImageCarousel**: Carrusel responsivo con imágenes de productos, accesible y adaptable para móviles y escritorio.
- **ContactForm**: Formulario con validación en cliente, que incluye campos claros y feedback visual para errores.
- **Header**, **Footer** y **Sections**: Componentes para estructura, navegación y contenido estático.

## Gestión con Git y GitHub
- El desarrollo se realiza con ramas separadas para cada funcionalidad (feature branches).
- Se usan Pull Requests para revisar y validar cambios antes de integrarlos a la rama principal.
- Cada commit incluye mensajes descriptivos claros.
- El repositorio es público y está disponible en: `https://github.com/FelipeAguirreA/desarrollo-frontend3.git`

---

Si deseas colaborar, puedes abrir un issue o un pull request. ¡Gracias por contribuir!
