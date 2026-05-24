# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at http://localhost:4321
npm run build    # static output → dist/
npm run preview  # serve dist/ locally
```

## Stack

Astro 5 (static, `output: 'static'`) + Tailwind CSS 4 via `@tailwindcss/vite`. No framework islands — all interactivity is vanilla JS in `<script>` tags inside `.astro` components. Fonts (Inter + Fira Code) are loaded from Google Fonts CDN in `src/layouts/Layout.astro`.

## Project structure

```
src/
  layouts/Layout.astro       # HTML shell, font imports, global.css
  pages/index.astro          # Single route — imports all section components
  components/
    Hero.astro               # Full-viewport hero, glitch animation, CTA
    Terminal.astro           # Faux terminal "whoami" typewriter (Intersection Observer)
    Skills.astro             # 3-column skill badge matrix
    Experience.astro         # 4 <details>/<summary> accordions
    Education.astro          # 3 <details>/<summary> accordions
    Contact.astro            # Footer with email/phone/GitHub/LinkedIn links
  styles/global.css          # @import "tailwindcss", @theme fonts, scanlines + glitch CSS
```

## Authoritative spec: `projectinfo.md`

`projectinfo.md` is the source of truth for scope, content, and aesthetic. It is written in Spanish and the site copy must remain in Spanish — do not translate user-facing strings to English. Key non-obvious constraints from the brief:

- **Stack is fixed:** Astro (static) + Tailwind CSS. Do not introduce Next.js, Vite-only setups, or a different CSS framework.
- **Single page.** All sections (Hero, Sobre Mí, Core Skills, Experiencia, Formación, Contacto) live on one route.
- **Accordions are a hard requirement**, not a nice-to-have. The brief calls this out as CRITICAL: Experiencia Laboral and Formación must render collapsed (title only) and expand on click. Prefer native `<details>`/`<summary>` with Tailwind styling before reaching for React/Astro islands — the brief lists `<details>` first for a reason (zero JS, accessible by default).
- **Aesthetic is specific:** dark mode + retro-tech 80s/90s + "cinematic noir". Backgrounds `bg-gray-900` / `bg-black`; accent colors are terminal-style (muted neon green, cyan, or monochrome amber). Two typefaces: a geometric sans (Inter/Montserrat) for body, a monospace (Fira Code / Roboto Mono) for skill tags and code-styled elements.
- **"Sobre Mí" is a faux terminal:** simulate a `whoami` command animation rendering the bio paragraph from the brief. This is a visual component, not a real shell.
- **Contact details are in the brief and must be used verbatim:** email `camposarmero.ivan@gmail.com`, phone `+34677099841`, location Alicante. The subject of the portfolio is Iván Campos Armero (not the repo owner).

## Content fidelity

The brief lists exact accordion entries for Experiencia and Formación (Prosegur/Insyte, AVATEL, Icono Enterprise, NHotels/Repairpart; UOC DAM, SMR Paco Molla, etc.). Treat those names, employers, and groupings as fixed content — don't paraphrase job titles or merge entries. The Hero headline and CTA text are also specified verbatim.

## Working language

The brief and intended site copy are Spanish. Code identifiers, comments, and commit messages can be English, but anything the visitor sees (section titles, button labels, alt text) stays Spanish unless the user asks otherwise.

## Deployment target: Vercel (static)

The site ships to Vercel. The brief explicitly calls the project "estático", so keep Astro's default `output: 'static'` — Vercel will detect the Astro preset and serve `dist/` directly, no `@astrojs/vercel` adapter needed. Only add the adapter if a real SSR/edge requirement appears (none in the current brief).

Practical consequences while building:
- Don't introduce server-only code paths (API routes, `Astro.request` runtime logic, env-var reads at request time). If a feature seems to need them, raise it before adding the adapter — it's probably solvable client-side or at build time.
- The contact section is mailto/tel links + social URLs (per the brief). Do not wire up a server-side contact form; if one is requested later, use a third-party form endpoint (Formspree, Web3Forms, etc.) rather than switching the site to SSR.
- Keep the build reproducible from a clean `npm install && npm run build` — Vercel runs exactly that. No machine-specific paths, no committed `dist/`.
