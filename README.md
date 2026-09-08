# Cecilia de Gracia Gallego · Psicoterapia

Web oficial de **Cecilia de Gracia Gallego**, psicóloga colegiada nº 21816 especializada en Psicoterapia Integrativa Relacional para jóvenes y adultos. Terapia presencial en Rubí (Barcelona) y sesiones online.

**URL en vivo:** [https://ceciliapsicoterapia.com](https://ceciliapsicoterapia.com)

---

## Qué incluye la web

- **Inicio**: presentación del espacio terapéutico, áreas de acompañamiento y proceso terapéutico.
- **Sobre mí**: biografía, enfoque y formación de Cecilia.
- **Servicios**: seis áreas de intervención con descripción propia.
- **Contacto**: formulario de contacto, teléfono, correo electrónico e Instagram.
- **Privacidad**: política de privacidad con información del responsable, finalidad, derechos y conservación de datos.

---

## Tecnologías

- [Vite](https://vitejs.dev/) · Entorno de desarrollo rápido.
- [React](https://react.dev/) · Biblioteca para interfaces.
- [TypeScript](https://www.typescriptlang.org/) · Tipado estático.
- [Tailwind CSS](https://tailwindcss.com/) · Estilos utilitarios.
- [React Router](https://reactrouter.com/) · Navegación entre páginas.
- [react-helmet-async](https://github.com/staylor/react-helmet-async) · Metadatos SEO por ruta.
- [Lucide React](https://lucide.dev/) · Iconografía.
- [GitHub Pages](https://pages.github.com/) · Hosting estático gratuito con dominio personalizado.

---

## Características principales

- **Diseño responsive**: adaptado a móvil, tablet y escritorio.
- **SEO básico**: títulos, descripciones, Open Graph, Twitter Cards, sitemap.xml, robots.txt y datos estructurados JSON-LD.
- **Imágenes optimizadas**: fotografías comprimidas en formato WebP para una carga rápida.
- **Formulario de contacto**: validación de campos y checkbox de aceptación de política de privacidad.
- **Navegación suave**: scroll al inicio de cada página al cambiar de ruta.
- **Estética cálida**: paleta de beige y verde, tipografías Playfair Display y Cormorant Garamond, fotos con bordes redondeados.

---

## Cómo ejecutar el proyecto en local

Requisitos: [Node.js](https://nodejs.org/) (versión 22 recomendada) y npm.

```bash
# 1. Clonar el repositorio
git clone https://github.com/SERGIOBELLON/tu-repositorio.git
cd tu-repositorio

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

La web estará disponible en `http://localhost:8080`.

---

## Cómo compilar para producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`. Para probar la versión de producción localmente:

```bash
npx serve dist
```

---

## Despliegue en GitHub Pages

El proyecto incluye un workflow en `.github/workflows/deploy.yml` que se encarga de compilar y publicar automáticamente la web cada vez que se hace push a la rama `main`.

Pasos para activarlo:

1. En GitHub, ve a **Settings → Pages → Source** y selecciona **GitHub Actions**.
2. Añade en tu proveedor de dominio los registros A de GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. En **Settings → Pages → Custom domain** escribe `ceciliapsicoterapia.com` y guarda.
4. Espera a que GitHub verifique el dominio y active el certificado HTTPS. Después marca **Enforce HTTPS**.

A partir de entonces, cada `git push origin main` actualizará la web automáticamente.

---

## Estructura del proyecto

```
├── .github/workflows/deploy.yml   # Workflow de GitHub Pages
├── public/                        # Archivos estáticos (favicon, OG image, sitemap, robots, CNAME)
├── src/
│   ├── assets/                    # Imágenes y logotipo
│   ├── components/                # Componentes reutilizables
│   │   ├── contacto/              # Banner y formulario de contacto
│   │   ├── home/                  # Secciones de la página de inicio
│   │   ├── layout/                # Header y Footer
│   │   └── Seo.tsx                # Componente de metadatos SEO
│   ├── hooks/                     # Hooks personalizados
│   ├── pages/                     # Páginas principales de la aplicación
│   ├── App.tsx                    # Rutas y configuración general
│   ├── index.css                  # Variables de color, tipografías y utilidades
│   └── main.tsx                   # Punto de entrada
├── index.html                     # HTML base con metadatos estáticos
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

---

## Contacto

- **Instagram:** [@cecilia_psicoterapia](https://www.instagram.com/cecilia_psicoterapia)
- **Teléfono:** [+34 682 025 418](tel:+34682025418)
- **Correo:** [ceciliadegracia@copc.cat](mailto:ceciliadegracia@copc.cat)
- **Ubicación:** Rubí, Barcelona

---

Desarrollado con [Lovable](https://lovable.dev) y ajustado para publicación en GitHub Pages.
