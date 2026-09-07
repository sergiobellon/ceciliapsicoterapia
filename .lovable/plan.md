# Plan: Mejoras y correcciones según feedback del PDF

## Resumen

Aplicar todas las correcciones indicadas en el documento "VERSIÓN ORDENADOR": nuevo logo, eliminar terracota, ampliar tipografías, cambiar forma de fotos, ajustes en Sobre Mí, Servicios, Contacto y Footer.

## Cambios a realizar

### 1. Reemplazar logo

- Copiar `user-uploads://transparent-logo.png` a `src/assets/logotipo.png` (sobreescribir el actual)
- El nuevo logo ya tiene transparencia y se usa en Header y Footer

### 2. Eliminar color terracota -- solo beige y verde

- En `src/index.css`: cambiar las variables `--secondary` para que usen el verde (`93 16% 45%`) en lugar del terracota (`25 55% 49%`)
- Actualizar `--secondary-foreground` a beige
- En `SobreMi.tsx`: cambiar el banner de `bg-secondary` a `bg-primary` (verde)
- En `ServiceDetail.tsx`: cambiar el color del título de `text-secondary` a `text-primary`
- Eliminar la prop `variant='terracotta'` de FranjaSection si se usa en algún sitio

### 3. Ampliar tamaños de fuente globalmente

- **Header**: logo text de `text-sm` a `text-base`, subtítulo de `text-xs` a `text-sm`, nav links de `text-base` a `text-lg`
- **HeroSection**: h1 de `text-3xl/4xl/5xl` a `text-4xl/5xl/6xl`, body text a `text-xl/2xl`, botón CTA más grande
- **AreasGrid**: labels de `text-base/lg` a `text-lg/xl`, título sección más grande
- **ProcesoSection**: títulos y textos una escala más grandes
- **ServiceDetail**: textos una escala más grandes
- **ContactForm**: frase final más grande (`text-xl/2xl`)
- **Footer**: textos ligeramente más grandes

### 4. Cambiar forma de fotos: de arco a círculo/cuadrado redondeado

- **AreasGrid**: reemplazar `arch-clip` por `rounded-full` (círculo) con dimensiones cuadradas (`w-48 h-48` / `w-56 h-56`)
- **ServiceDetail**: reemplazar `arch-clip` por `rounded-3xl` (cuadrado redondeado)
- **HeroSection**: cambiar también a `rounded-3xl` o `rounded-full` según coherencia

### 5. ProcesoSection: eliminar contraste de tonos beige

- Cambiar `bg-muted/30` a `bg-background` (mismo fondo que el resto)
- Cambiar las tarjetas de `bg-primary/10` a un estilo sin fondo diferenciado, o usar bordes sutiles

### 6. Sobre Mí: ajustes de layout

- Eliminar el texto "Sobre mí" que aparece encima del nombre en el banner
- Añadir layout de 2 columnas: texto a la izquierda, foto de Cecilia a la derecha
- Eliminar el botón "Mi formación"
- En la sección formación: cambiar el título "Sobre mí" por "Mi Formación"

### 7. Servicios: fotos 

- En la página de Servicios, las fotos en cada `ServiceDetail` se muestran en desktop bien. Pero en movil ocupan mucho espacio y desplaza muy lejos el cta, queremos esconder esta fotos en movil para evitar esto.

### 8. Footer: añadir Instagram

- Añadir enlace a `@cecilia_psicoterapia` con icono de Instagram junto al teléfono y email
- Importar icono `Instagram` de lucide-react

### 9. Arreglar navegación y scroll

- Todos los links del Header (`Sobre mí`, `Servicios`, `Pide cita`) deben hacer scroll al top de la página de destino
- Todos los botones "Pide Cita" deben llevar al inicio de `/contacto` (scroll top)
- Añadir un `useEffect` con `window.scrollTo(0, 0)` en cada página cuando cambia la ruta

### 10. Contacto: frase más grande

- Aumentar el tamaño de la frase final "Me pondré en contacto contigo..." de `text-lg` a `text-xl lg:text-2xl`

## Archivos a modificar


| Archivo                                      | Cambios                                                           |
| -------------------------------------------- | ----------------------------------------------------------------- |
| `src/assets/logotipo.png`                    | Reemplazar con nuevo logo                                         |
| `src/index.css`                              | Eliminar terracota de variables CSS                               |
| `src/components/layout/Header.tsx`           | Fuentes más grandes                                               |
| `src/components/layout/Footer.tsx`           | Fuentes más grandes + Instagram                                   |
| `src/components/home/HeroSection.tsx`        | Fuentes más grandes, forma foto                                   |
| `src/components/home/AreasGrid.tsx`          | Fotos circulares, labels más grandes                              |
| `src/components/home/ProcesoSection.tsx`     | Eliminar contraste beige, fuentes más grandes                     |
| `src/components/home/FranjaSection.tsx`      | Eliminar variant terracotta                                       |
| `src/components/servicios/ServiceDetail.tsx` | Forma fotos, colores sin terracota, fuentes más grandes           |
| `src/pages/Index.tsx`                        | Sin cambios estructurales                                         |
| `src/pages/SobreMi.tsx`                      | Layout 2 cols, eliminar "Sobre mí" titulo, quitar botón formación |
| `src/pages/Servicios.tsx`                    | Ajuste orden mobile                                               |
| `src/pages/Contacto.tsx`                     | Frase más grande                                                  |
| `src/App.tsx`                                | ScrollToTop component                                             |
