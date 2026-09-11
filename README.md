# Portafolio de Samuel Charry

Una página estática basada en `disenio/Presentación1.pptx` y las fotos del portafolio. Tipografía grande, fondo negro, retrato editorial y proyectos en formato de cartel. No se ha publicado ni conectado a un repositorio.

## Abrir y editar

1. En VS Code, selecciona **Archivo → Abrir carpeta** y abre `C:\Users\nrir\Desktop\portafolium`.
2. Abre `index.html`. Puedes hacer doble clic en el archivo desde el Explorador para ver la página. El sitio funciona sin internet y sin instalar paquetes.
3. Si quieres recargar automáticamente al guardar, usa la extensión opcional **Live Server** y elige **Open with Live Server** sobre `index.html`.

Otra opción, si tienes Node.js: ejecuta `npm start` en la terminal de esta carpeta y abre `http://127.0.0.1:4173`. No hace falta `npm install`. Detén el servidor con `Ctrl+C`. Si ese puerto está ocupado, usa Live Server o define otro mediante la variable `PORT`.

## Dónde cambiar cada cosa

| Archivo                             | Qué editar                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------ |
| `index.html`                        | Textos, títulos, orden de secciones, formación, certificados y descargas       |
| `css/styles.css`                    | Colores y fuentes en `:root`, tamaños, espacios, carteles, animaciones y móvil |
| `js/content.js`                     | Correo, LinkedIn, GitHub y contenido de las fichas de proyectos                |
| `js/main.js`                        | Navegación activa, revelado al hacer scroll, inclinación de carteles y fichas  |
| `assets/images/samuel-portrait.png` | Fotografía de portada sin letras                                               |
| `assets/images/samuel-event.png`    | Fotografía del evento editada en esta conversación                             |
| `assets/fonts/`                     | Fuente Anton y su licencia SIL Open Font License                               |
| `certificaciones/`                  | PDFs originales: IELTS, HPC y CV en español e inglés                           |

Los encabezados y menús son HTML real: puedes seleccionarlos, cambiarlos y traducirlos. Las imágenes originales, la presentación y el archivo `home` se conservaron intactos. La web utiliza copias de las fotos con nombres y extensiones apropiados.

## Enlaces pendientes

En `js/content.js` están configurados GitHub y LinkedIn. El LinkedIn se obtuvo del README público de tu perfil de GitHub: `https://linkedin.com/in/SamuelCharry`. Si cambias un destino, actualiza también el enlace correspondiente en `index.html` para mantenerlo consistente con JavaScript desactivado.

Cada proyecto tiene `repository` y `demo`. Reemplaza `null` por una URL real entre comillas. El botón correspondiente aparecerá en la ficha cuando exista un enlace. No se han asociado repositorios solo por parecido de nombre.

```js
// Ejemplo de estructura.
linkedin: "https://linkedin.com/in/SamuelCharry",
// Dentro de un proyecto:
repository: null,
demo: null
```

El correo inicial es `s.charryt27@gmail.com`, tomado de la presentación y coincidente con el contacto principal del README de tu perfil de GitHub. Los CV originales tienen `sami.charry27@gmail.com`. Puedes unificarlos cuando actualices esos documentos. Al modificar el correo en `js/content.js`, actualiza también los enlaces `mailto:` de `index.html` para que el destino sea el mismo cuando JavaScript esté desactivado.

## Añadir un proyecto

1. Duplica un `<article class="project">` dentro de `.poster-grid` en `index.html`.
2. Asigna una clave nueva al botón: por ejemplo, `data-project="miProyecto"`.
3. Añade esa misma clave a `projects` en `js/content.js`, con `title`, `category`, `summary`, `paragraphs`, `stack`, `repository` y `demo`.
4. Cambia el cartel en HTML y, si quieres, crea su clase de color en CSS. Los carteles actuales son composiciones tipográficas editables, no imágenes de proyectos ni capturas reales de aplicaciones.
5. Prueba el botón y su ficha. Se puede cerrar con Escape, el botón Close o un clic fuera; el foco vuelve al cartel.

## Contenido por completar

- Enlaces exactos de los cuatro proyectos.
- Descripción, contribución, tecnologías e imágenes reales de Kevin's Joyeros. La presentación solo aportaba el nombre; se dejó una ficha breve que indica que el caso está en preparación.
- Enlace o archivo del curso de edX. Está mencionado en los CV, pero no hay un certificado de ese curso en la carpeta. El certificado descargable de HPC corresponde a la **HPC Summer School 2024**, no al curso de edX.
- La sección About sigue el idioma y el contenido de la presentación; el resto de la web mantiene ese inglés. Puedes traducir los textos directamente en HTML y `js/content.js`.

La formación figura en curso (2023–2027). IELTS se muestra como 7.5 / C1, confirmado en el PDF. La experiencia HPC se presenta como voluntariado, de acuerdo con la presentación. La última sección invita a una primera oportunidad de prácticas o puesto junior.

## Movimiento y accesibilidad

Entrada escalonada del título, revelado suave de secciones, inclinación sutil de carteles con el ratón y navegación que indica la sección actual. El sitio respeta **reducir movimiento**, conserva el cursor normal y no altera el desplazamiento nativo. Hay navegación con teclado, enlace para saltar al contenido y fichas basadas en el elemento nativo `<dialog>`.

En móvil, el menú lateral pasa a la parte inferior. El contenido principal y las descargas siguen disponibles con JavaScript desactivado; las fichas ampliadas requieren JavaScript.

## Más adelante: GitHub Pages

La estructura está preparada para servir archivos estáticos. Las rutas son relativas y también funcionan cuando el sitio está en una subcarpeta. `index.html` está en la raíz y `.nojekyll` evita un procesamiento innecesario. No necesita backend ni una compilación.

Cuando decidas publicarlo, puedes usar un repositorio `SamuelCharry.github.io` para una página de usuario, o un repositorio de proyecto para una dirección bajo esa página. No se creó ningún repositorio, commit ni despliegue.

Los certificados se enlazan completos, tal como los proporcionaste. Antes de publicar, decide si quieres compartir esas versiones: el IELTS incluye identificadores y fecha de nacimiento, y los CV incluyen teléfono y correo. Puedes reemplazar los PDFs por copias destinadas a publicación manteniendo los nombres. Las fotos del evento y el retrato son las versiones editadas de esta conversación.

## Comprobación rápida

`npm run check` verifica la sintaxis del JavaScript. Antes de terminar una edición, abre la web, prueba cada enlace, las cuatro fichas y las descargas, y comprueba una ventana estrecha.
