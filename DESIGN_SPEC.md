# Design System — Portafolio Typewriter

> Este documento define las reglas visuales y de maquetación del portafolio.

---

## Concepto

Fusión de la estética *typewriter* (máquina de escribir) con principios de diseño moderno. Tipografía monoespaciada como base, contrastes nítidos, y micro-interacciones que evocan la escritura mecánica.

---

## Paleta de Colores

| Token | Color | Uso |
|---|---|---|
| `--color-primary` | `#2d3436` | Texto principal |
| `--color-secondary` | `#636e72` | Texto secundario, metadatos |
| `--color-accent` | `#d63031` | Acentos, hover, bullet de sección |
| `--color-bg` | `#f5f5f5` | Fondo de página |
| `--color-surface` | `#ffffff` | Tarjetas, contenedores |
| `--color-border` | `#e0e0e0` | Bordes y separadores |

---

## Tipografía

- **Space Mono** — Fuente principal (monoespaciada, estilo terminal/typewriter)
  - Pesos: 400 (regular), 700 (bold)
  - Usos: cuerpo, títulos, navegación, botones

- **Playfair Display** — Fuente de acento (serif elegante)
  - Pesos: 400 (regular italic), 700 (bold)
  - Usos: subtítulos, citas, greetings decorativos

---

## Componentes Clave

### Esquinas decorativas (`.corner`)
Elementos absolutos en las esquinas del hero. Simulan el marco de una página mecanografiada.

```css
.corner--tl { top: 24px; left: 24px; border-right: none; border-bottom: none; }
.corner--tr { top: 24px; right: 24px; border-left: none; border-bottom: none; }
.corner--bl { bottom: 24px; left: 24px; border-right: none; border-top: none; }
.corner--br { bottom: 24px; right: 24px; border-left: none; border-top: none; }
```

### Títulos de sección (`.section-title`)
Estilo `● NOMBRE` con bullet rojo. Siempre en mayúsculas.

```
.section-title::before {
  content: '';
  width: 8px; height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
}
```

### Cursor typewriter
Animación de blink infinita en el cursor que parpadea al final del texto tipeado.

```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

### Tarjetas de proyecto
- Fondo blanco, borde sutil, sombra ligera
- Imagen con `filter: grayscale(30%)` → grayscale(0%) en hover
- Hover: `translateY(-4px)` + sombra más pronunciada

---

## Animaciones

| Efecto | Trigger | Descripción |
|---|---|---|
| Typewriter | Click / carga inicial | Letra por letra con sonido de tecla |
| Cursor blink | Al terminar typewriter | Parpadeo infinito |
| Fade-in | Scroll (IntersectionObserver) | Opacidad 0 → 1 + translateY(24px) |
| Stagger | Scroll en grillas | Hijos aparecen secuencialmente con delay |
| Hover card | Mouse sobre tarjeta | Elevación + desaturación de imagen |

---

## Responsive Breakpoints

| Breakpoint | Comportamiento |
|---|---|
| `<= 960px` | Grid 2 columnas, contacto apilado |
| `<= 720px` | Menú hamburguesa, grid 1 columna, about apilado |
| `<= 480px` | Tipografía reducida, márgenes ajustados |

---

## Buenas Prácticas Implementadas

- **HTML semántico**: `<nav>`, `<article>`, `<section>`, `<main>`, `<header>`, `<footer>`
- **Metodología BEM**: `bloque__elemento--modificador`
- **CSS Variables**: Sistema de tokens en `:root`
- **Accesibilidad**: ARIA labels, alt texts, `loading="lazy"`, contraste suficiente
- **SEO**: Open Graph meta tags, `rel="noopener"`, `meta description`
- **Performance**: `preconnect` a Google Fonts, IntersectionObserver, lazy loading en imágenes
- **JavaScript moderno**: Módulos vanilla, `IntersectionObserver`, `DOMContentLoaded`
- **Audio**: Reproducción con manejo de autoplay policies del navegador

---

## Estructura de Archivos

```
portafolio/
├── index.html        # Home — hero + proyectos + skills + about
├── proyectos.html    # Lista completa de proyectos
├── contacto.html     # Info de contacto + galería
├── css/
│   └── style.css     # Único stylesheet (tokens + componentes + responsive)
├── js/
│   └── main.js       # Typewriter + nav + scroll animations
├── src/
│   ├── images/       # Assets visuales
│   └── audios/       # sound-maquina-de-escribir.mp3
├── DESIGN_SPEC.md    # Este documento
└── firebase.json
```
