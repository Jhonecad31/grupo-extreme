# Grupo Extreme - Web Platform 🌴

Plataforma web oficial para **Extreme Adventuring Cancun**, el parque ecológico de aventuras líder en la icónica Ruta de los Cenotes en Puerto Morelos. Construido para ofrecer una experiencia premium a los visitantes y reflejar más de 18 años de legado en ecoturismo.

## Tecnologías Utilizadas

Este proyecto es una aplicación moderna de alto rendimiento construida con las mejores herramientas del ecosistema frontend:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconografía:** SVGs personalizados (Heroicons / Custom)

## Estructura del Proyecto

```text
src/
├── app/                  # Rutas de la aplicación (Next.js App Router)
│   ├── about/            # Página de "Nosotros" (Misión, Visión, Historia)
│   ├── contact/          # Página de "Contacto"
│   ├── projects/         # Galería de aventuras y redirección
│   └── page.tsx          # Landing page (Inicio)
├── components/           # Componentes UI reutilizables
│   ├── shared/           # Header y Footer globales
│   ├── HeroCarousel.tsx  # Carrusel interactivo principal
│   └── ProjectCard.tsx   # Tarjetas de aventuras
└── data/                 # Base de datos local
    └── projects.ts       # Información, imágenes y URLs de cada aventura
```

## Instalación y Desarrollo

Sigue estos pasos para correr el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/grupo-extreme.git
   cd grupo-extreme
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
---
*Diseñado y desarrollado para Grupo Extreme (Est. 2008).*
