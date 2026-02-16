# Research Findings

## Decision: Use Lottie-Web for animated particle background
**Rationale**: Lottie provides high-quality, performant JSON-based animations that align with the anime aesthetics requirement. It's lightweight and can be optimized for web performance, fitting the constitution's performance obsession.

**Alternatives considered**:
- CSS-only animations: Rejected due to complexity in creating particle effects and potential performance issues on low-end devices.
- Canvas-based animations: Rejected as heavier and less accessible than Lottie.

## Decision: Use Typed.js for code typing effect
**Rationale**: Typed.js is a simple, lightweight library for creating typing animations, perfect for showcasing DevOps commands. It supports customization and integrates easily with vanilla JS.

**Alternatives considered**:
- Custom JavaScript implementation: Rejected to avoid reinventing the wheel and potential bugs.
- CSS animations with text: Rejected as less realistic for typing effect.

## Decision: Integrate DevOps tool icons via SVG sprites
**Rationale**: SVG sprites ensure scalability, accessibility, and performance. Using Heroicons or similar for consistency with constitution guidelines.

**Alternatives considered**:
- PNG/JPG icons: Rejected due to lack of scalability and higher file sizes.
- Font icons: Rejected for better accessibility and loading performance.

## Decision: Tailwind CSS for styling with custom configuration
**Rationale**: Allows rapid development of responsive, anime-themed designs with neon gradients and glass-morphism. Custom config ensures brand consistency.

**Alternatives considered**:
- Pure CSS: Rejected for slower development and maintenance.
- Bootstrap: Rejected as it doesn't align with anime aesthetics and adds unnecessary bloat.

## Decision: Static site deployment on GitHub Pages
**Rationale**: Simple, free hosting that supports custom domains, aligning with infrastructure as code mindset.

**Alternatives considered**:
- Netlify/Vercel: Considered but GitHub Pages suffices for a personal portfolio.