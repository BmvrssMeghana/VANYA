---
name: Artisanal Editorial
colors:
  surface: '#fff8f1'
  surface-dim: '#e1d9cc'
  surface-bright: '#fff8f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2e5'
  surface-container: '#f6ede0'
  surface-container-high: '#f0e7da'
  surface-container-highest: '#eae1d4'
  on-surface: '#1f1b13'
  on-surface-variant: '#524440'
  inverse-surface: '#343027'
  inverse-on-surface: '#f9f0e2'
  outline: '#84736f'
  outline-variant: '#d7c2bd'
  surface-tint: '#855142'
  primary: '#421b0f'
  on-primary: '#ffffff'
  primary-container: '#5d3023'
  on-primary-container: '#d79886'
  inverse-primary: '#fab6a4'
  secondary: '#845333'
  on-secondary: '#ffffff'
  secondary-container: '#ffbe97'
  on-secondary-container: '#7a4b2c'
  tertiary: '#382212'
  on-tertiary: '#ffffff'
  tertiary-container: '#503726'
  on-tertiary-container: '#c3a08a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#fab6a4'
  on-primary-fixed: '#341006'
  on-primary-fixed-variant: '#693a2c'
  secondary-fixed: '#ffdbc8'
  secondary-fixed-dim: '#f9b891'
  on-secondary-fixed: '#321300'
  on-secondary-fixed-variant: '#683c1e'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#e5bfa8'
  on-tertiary-fixed: '#2b1708'
  on-tertiary-fixed-variant: '#5b412f'
  background: '#fff8f1'
  on-background: '#1f1b13'
  surface-variant: '#eae1d4'
typography:
  display-lg:
    fontFamily: Faustina
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Faustina
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Faustina
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Faustina
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Faustina
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Faustina
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  quote-editorial:
    fontFamily: Faustina
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Faustina
    fontSize: 19px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Faustina
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Faustina
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-lg: 2.5rem
  margin: 1.25rem
  margin-md: 2.5rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system embodies the warmth, soul, and tactility of traditional Indian craft elevated through contemporary editorial curation. Built for an AI-powered marketplace connecting heritage artisans with discerning patrons, the aesthetic bridges raw tactile honesty and quiet digital luxury.

The visual direction rejects cold, sterile tech clichés, neon accents, and generic synthetic gradients. Instead, it draws from natural pigments—terracotta, unbleached linen, aged wood, and copperware. The interface functions as an exhibition catalogue: spacious, respectful of negative space, prioritizing large-format documentary photography, deliberate typography, and subtle ambient depth.

### Design Principles
- **Tactile Honesty**: Surfaces feel physical, textured, and warm like handmade paper and unglazed clay rather than cold glass.
- **Curatorial Restraint**: Generous whitespace surrounds craft items, treating each piece as a museum-grade archival artifact.
- **Humanized Intelligence**: AI capabilities manifest as thoughtful concierges, contextual storytelling ribbons, and provenance verifications, never as disruptive sci-fi visual gimmicks.

## Colors

The palette is derived from natural earth pigments and artisanal materials. It relies on nuanced, warm undertones rather than stark digital primaries.

- **Primary (`#5D3023` — Chocolate Brown)**: Carries structural authority. Used for primary interactive triggers, display typography, master navigation anchors, and dominant brand framing.
- **Secondary (`#895737` — Rustic Copper)**: An energetic metallic terracotta. Used for active navigation states, curation tags, key accent rules, and focal highlights.
- **Tertiary (`#D9B49D` — Blush Beige)**: A soft terracotta wash. Deployed for subtle hairline borders, container fills, and delicate badges.
- **Neutral Canvas (`#F2E9DC` — Ivory Cream)**: The primary canvas base background that softens the screen and evokes handmade organic parchment.
- **High-Key Contrast (`#FAF6F0` & `#FFFFFF`)**: Dedicated surface layers used to elevate cards, dialogue layers, and product staging backgrounds.
- **Deep Umber Body (`#2E1B15`)**: A rich, ink-like dark charcoal umber that replaces pure `#000000` to deliver legible reading contrast without harsh digital fatigue.

## Typography

The typographic hierarchy is led by **Faustina**, a warm, sculpted serif with chiseled strokes and quiet literary distinction. It commands headlines, editorial narratives, story titles, artisan quotes, and long-form prose.

To safeguard legibility in data-dense utilities, micro-labels, pricing tags, badge chips, and technical provenance metadata, the system pairs Faustina with **Plus Jakarta Sans**. This sans-serif partner is employed sparingly in uppercase tracking and compact weights, keeping the overall tone firmly rooted in an editorial world.

### Usage Notes
- **Editorial Headings**: Utilize Faustina Italic (`font-style: italic`) selectively within headline lockups to emphasize craft origins, materials, or artisan names.
- **Line Length**: Long-form artisanal stories should restrict line lengths to 60–72 characters to preserve readability across desktop displays.

## Layout & Spacing

The interface employs a responsive 12-column fluid grid calibrated for editorial pacing and asymmetric showcase compositions.

### Breakpoints & Geometry
- **Mobile (< 768px)**: 4-column layout, `margin`: `1.25rem`, `gutter`: `1rem`. Hero imagery transitions into full bleed with edge-to-edge organic sliders.
- **Tablet (768px – 1024px)**: 8-column layout, `margin-md`: `2.5rem`, `gutter`: `1.5rem`.
- **Desktop (> 1024px)**: 12-column layout capped at `1440px` maximum content width, centered with `margin-lg`: `4rem`, `gutter-lg`: `2.5rem`.

Negative space is treated as an active visual material. Sections breathe through oversized vertical increments (`space-2xl` and `space-3xl`), creating a deliberate, contemplative browsing rhythm reminiscent of an art gallery.

## Elevation & Depth

Visual hierarchy avoids generic cold shadows and excessive elevation steps. Instead, depth is achieved through **tonal layering**, **hairline earth borders**, and **warm diffused ambient glows**.

### Depth Layers
- **Base Canvas (`#F2E9DC`)**: The grounding floor for all global layouts.
- **Tier 1 Surface (`#FAF6F0`)**: Floating content tiles, standard product cards, and story wrappers.
- **Tier 2 Surface (`#FFFFFF`)**: Focal modals, active flyout drawers, and magnified inspection views.

### Shadow Attributes
Shadows are warm-tinted and deeply diffused, mimicking sunlight hitting natural materials:
- **Card Rest**: `box-shadow: 0 4px 20px -2px rgba(93, 48, 35, 0.05);`
- **Card Hover / Raised**: `box-shadow: 0 16px 36px -4px rgba(93, 48, 35, 0.10);`
- **Floating Modals**: `box-shadow: 0 24px 48px -6px rgba(46, 27, 21, 0.16);`

All raised surfaces carry an accompanying subtle hairline outline (`1px solid rgba(217, 180, 157, 0.45)`) to maintain distinct physical edges over light backdrops.

## Shapes

The shape architecture relies on organic, generous curves reflecting hand-thrown pottery, polished stones, and woven textiles. Sharp geometric corners are avoided across public surfaces.

- **Micro Components (Chips, Inputs, Buttons)**: Formed with smooth `12px` to `16px` curvature or full pill radii (`9999px`) where appropriate.
- **Content Cards & Media Containers**: Styled with `rounded-2xl` (16px) or `rounded-3xl` (24px) corners to frame artisan pieces warmly.
- **Showcase & Hero Frames**: Large visual vignettes leverage asymmetrical rounded corners (e.g., top-left/bottom-right at `32px` with opposing corners at `16px`) to evoke handcrafted organic cutouts.

## Components

### Buttons
- **Primary Action**: Chocolate Brown (`#5D3023`) fill, Ivory Cream (`#F2E9DC`) typography in Faustina SemiBold or Plus Jakarta Sans Medium, subtle pill or `rounded-2xl` contour. Hover triggers a warm terracotta shift toward Rustic Copper (`#895737`) with a soft expansion glow.
- **Secondary Action**: Ivory Cream (`#F2E9DC`) or Soft White (`#FAF6F0`) surface with a 1px border of Rustic Copper (`#895737` at 30% opacity) and Chocolate Brown (`#5D3023`) text.
- **Tertiary / Text Link**: Uncontained Faustina link featuring a persistent delicate underline spaced 4px below the descender in Rustic Copper.

### Product & Story Cards
- **Construction**: Staged on Soft Cream (`#FAF6F0`) or White (`#FFFFFF`) with a 1px Blush Beige (`#D9B49D`/40) border.
- **Imagery**: Generous portrait or square aspect ratios (4:5 / 1:1) showcasing raw textures and craft details. Subtle 1.03x scale zoom on hover executed over an ease-out 500ms curve.
- **Metadata**: Artisan name and geographic heritage tagged via micro Plus Jakarta Sans labels (`label-md`), followed by the artifact title in Faustina (`headline-sm`).

### Chips & Badges
- **Form**: Rounded pill shape with 6px vertical and 12px horizontal padding.
- **Palette**: Subtle Blush Beige tint (`#D9B49D` at 25% opacity) coupled with Rustic Copper text (`#895737`), rendering craft categories, materials, and regional GI-tags distinct yet understated.

### Form Inputs & Selectors
- **Surface**: Light Cream (`#FAF6F0`) fill bordered with `#D9B49D` (60% opacity).
- **Focus State**: Hairline transition to Rustic Copper (`#895737`) with a 3px diffused outer halo in `#895737`/15. Labels sit comfortably above in Chocolate Brown.

### AI Story & Provenance Banner
- Dedicated conversational insights and AI craft provenance narratives are housed in warm Parchment containers (`#FAF6F0`), flanked by a left accent line in Rustic Copper (`#895737`) and paired with Faustina Italic quotation styling.