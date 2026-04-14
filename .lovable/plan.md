

# Plan: Últimos cambios en la web

## Resumen

Aplicar los últimos ajustes solicitados en el PDF: actualizar textos del hero, ampliar fuentes del nav, añadir fondo verde a la sección "Proceso terapéutico", subir tono de las tarjetas, y cambiar la frase de formación en Sobre Mí.

## Cambios a realizar

### 1. Ampliar letras del menú de navegación (Header)
- Subir los nav links de `text-lg` a `text-xl`

### 2. Actualizar textos del HeroSection
- **Título (h1)**: Cambiar a "Un espacio terapéutico seguro donde, a través del vínculo, lo que te ocurre puede ser escuchado, comprendido y transformado."
- **Subtítulo (p)**: Cambiar a "Acompaño a jóvenes y adultos en su malestar, favoreciendo procesos de regulación, equilibrio y estabilidad emocional"

### 3. ProcesoSection: fondo verde + tarjetas con más contraste
- Envolver toda la sección con `bg-primary` y cambiar los colores de texto a `text-primary-foreground`
- Las tarjetas: usar un fondo beige ligeramente más oscuro (`bg-primary-foreground/90` o `bg-[#eee4c8]`) para generar contraste sutil, con texto en `text-foreground`

### 4. Sobre Mí: cambiar frase de formación
- En la sección "Mi Formación", reemplazar la frase en cursiva actual por: *"Mantengo una formación continua en las distintas áreas y enfoques psicoterapéuticos en los que trabajo, que enriquecen y dan coherencia a mi práctica clínica."*

## Archivos a modificar

| Archivo | Cambio |
|---|---|
| `src/components/layout/Header.tsx` | Nav links a `text-xl` |
| `src/components/home/HeroSection.tsx` | Nuevos textos de título y subtítulo |
| `src/components/home/ProcesoSection.tsx` | Fondo verde, tarjetas con contraste beige |
| `src/pages/SobreMi.tsx` | Nueva frase cursiva en formación |

