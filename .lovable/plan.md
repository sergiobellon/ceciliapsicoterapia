

# Plan: Web completa de Cecilia de Gracia -- Psicoterapia

## Resumen

Construir la web profesional de Cecilia de Gracia Gallego, psicóloga y psicoterapeuta, con 4 páginas principales siguiendo fielmente los prototipos de Canva, la paleta de colores, y todos los textos del PDF.

## Identidad visual

- **Colores**: Beige `#f6edd4`, Verde `#728264`, Terracota `#bd703b`
- **Tipografias**: Google Fonts similares a Frunchy Sage (titulos: se usara una serif decorativa como "Playfair Display" o similar que emule ese estilo) y Monterchi Serif (cuerpo: "Cormorant Garamond" o "Lora")
- **Estilo general**: Calido, organico, profesional. Inspirado en irenelozanomir.com -- espaciado generoso, transiciones suaves, imagenes con recorte de arco (arch shape)

## Estructura de archivos a crear

```text
src/
  assets/          -- todas las imagenes copiadas aqui
  components/
    layout/
      Header.tsx         -- nav con logo + links
      Footer.tsx         -- info contacto + logo
    home/
      HeroSection.tsx    -- texto hero + foto Cecilia
      FranjaSection.tsx  -- franja verde con CTA
      AreasGrid.tsx      -- 6 tarjetas con imagenes circulares/arco
      ProcesoSection.tsx -- 3 tarjetas proceso terapeutico
    servicios/
      ServiceDetail.tsx  -- layout reutilizable: texto + imagen arco
    sobre-mi/
      SobreMiContent.tsx -- bio completa
      FormacionSection.tsx -- listado formacion
    contacto/
      ContactBanner.tsx  -- franja verde "Pide Cita"
      ContactForm.tsx    -- formulario de contacto
  pages/
    Index.tsx          -- Home
    SobreMi.tsx        -- Sobre mi + formacion
    Servicios.tsx      -- Areas de acompanamiento (6 secciones)
    Contacto.tsx       -- Pide cita + formulario
  index.css            -- variables CSS, fuentes, estilos globales
```

## Paginas y secciones

### 1. Home (Index.tsx)
- **Header**: Logo izquierda + "Cecilia de Gracia Gallego / Psicóloga | Psicoterapia Integrativa Relacional / Colegiada nº21816". Links derecha: Inicio, Quien soy, Servicios, Pide Cita
- **Hero**: Texto izquierda ("Un espacio terapéutico seguro...") + foto Cecilia derecha. Boton "Áreas de acompañamiento"
- **Franja verde**: Texto sobre fondo verde + boton "Pide cita"
- **Areas grid**: 6 imagenes con forma de arco en grid 3x2, cada una con su nombre debajo. Clickables, llevan a /servicios#area
- **Proceso terapeutico**: Titulo + 3 tarjetas (Lo que te trae aqui, Entender lo que ocurre, Encontrar equilibrio) + boton "Pide Cita"
- **Footer**: Logo + datos contacto (telefono, email)

### 2. Sobre mi (SobreMi.tsx)
- Franja terracota con titulo "Sobre mi" + nombre + colegiada
- Contenido bio completo (todos los parrafos del PDF)
- Boton "Mi formacion" que lleva a seccion formacion
- Seccion formacion: franja verde con nombre, listado de titulaciones

### 3. Servicios (Servicios.tsx)
- 6 secciones, cada una con layout: texto izquierda + imagen arco derecha
- Cada area: Regulacion emocional, Dificultades relacionales, Trauma, Duelo y perdidas, Trastornos alimentarios, Desarrollo personal
- Cada seccion con boton "Pide Cita"
- Frase destacada en color verde para cada area

### 4. Contacto (Contacto.tsx)
- Franja verde: "PIDE CITA" + frase + telefono + email
- Formulario sobre fondo beige: Nombre, Telefono, Correo, Mensaje
- Texto: "Me pondré en contacto contigo lo antes posible..."

## Imagenes a copiar al proyecto
- `logotipo.png` -- logo de la marca
- `1.Regulacion_emocional.jpg` -- ola (para area regulacion)
- `2.Relaciones.jpg` -- cuerda corazon (dificultades relacionales)
- `3.Trauma.jpg` -- planta en roca (trauma)
- `4.Relacion_con_la_comida.jpg` -- peras (trastornos alimentarios)
- `5.Duelo.jpg` -- bosque con luz (duelo)
- `6.Autoconocimiento.jpeg` -- girasol (desarrollo personal)
- Foto de Cecilia extraida del PDF (parsed-documents)

## Detalles tecnicos

- Todas las imagenes de areas tendran CSS `clip-path` o `border-radius` para el efecto de arco (arch shape) visible en los prototipos
- Scroll suave entre secciones con IDs de ancla
- Responsive: mobile-first, hamburger menu en mobile
- Fuentes cargadas via Google Fonts en index.html
- Colores definidos como variables CSS en tailwind.config.ts
- Animaciones sutiles de entrada (fade-in al scroll) usando Intersection Observer
- Formulario de contacto client-side con validacion (sin backend por ahora, mostrara toast de confirmacion)

