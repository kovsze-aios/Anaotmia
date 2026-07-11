# Kenhub.com — Design Tokens

## Colors

### Primary Palette
| Token | Value | Usage |
|-------|-------|-------|
| --primary-bg | #3A5062 | Hero, callout backgrounds |
| --primary-bg-end | #2D3E4D | Hero gradient end |
| --accent | #0099FF | Buttons, logo, links |
| --text-primary | #495354 | Body text |
| --text-white | #FFFFFF | Text on dark backgrounds |
| --text-muted | rgba(255,255,255,0.8) | Muted text on dark |
| --star-color | #FFC026 | Rating stars |
| --gray-light | #ECECEC | Footer background |
| --gray-border | #DDDDDD | Borders |
| --green-check | (green circle) | Checklist items |
| --black | #000000 | Minimal use |

### Semantic Map
- **Background:** #FFFFFF (page), #3A5062 (dark sections), #ECECEC (footer)
- **Foreground:** #495354 (body), #FFFFFF (on dark)
- **Primary/Accent:** #0099FF
- **Muted:** #495354, rgba(255,255,255,0.8)
- **Border:** #DDDDDD
- **Ring/Focus:** N/A

## Typography

### Font Family
- **PlutoSansLight** — Headings (h1-h2)
- **PlutoSansRegular** — Body text, paragraphs
- **PlutoSansMedium** — Buttons, emphasis, numbers/ratings
- **PlutoLightItalic** — Occasional italic use

### Font Sizes
| Element | Size | Line-Height | Weight | Family |
|---------|------|-------------|--------|--------|
| h1 | 48px | 57.6px (1.2) | 300 (Light) | PlutoSansLight |
| h2 (hero/callout) | TBD | — | — | PlutoSansLight |
| Body text | 18px | 26px (1.44) | 400 | PlutoSansRegular |
| Button | 14px | 18px | 500 (Medium) | PlutoSansMedium |
| Social proof text | 12px | 14.4px (1.2) | 300-500 | PlutoSansLight/Medium |
| Stars | 12px | 14.4px | 500 | PlutoSansMedium |

### Letter Spacing
- Body/headings: -0.16px
- Stars: 1px

## Spacing

### Container Widths
- **Max content:** 940px (with margin auto)
- **Full-width sections:** 1440px (edge-to-edge)
- **Topbar container:** 940px

### Padding/Margins
- **Section padding:** 80px top/bottom (experts, callout)
- **Container margin:** 0 250px (creates 940px center on 1440px viewport)
- **Button padding:** 0 20px (horizontal)
- **h1 margin-bottom:** 26px
- **p margin-bottom:** 30px
- **CTA button margin-right:** 14px
- **Section margin-bottom:** 40px (hero)
- **Callout padding:** 80px 15px
- **Footer padding-bottom:** 45px

### Gaps
- **Topbar items:** 10px (gap in flex)
- **Social proof:** 10px gap between avatars and text
- **Rating items:** 2px gap

## Border Radius
- **Buttons:** 2px
- **Avatars:** circular (50%)
- **Images:** 0px (default)

## Shadows
- **None detected** on buttons or cards (flat design)

## Breakpoints
- Desktop: 1440px (measured)
- Tablet: ~768px (TBD)
- Mobile: ~390px (TBD)
- The page appears to use a responsive framework with `hidden-md` class for responsive hiding

## Z-Index Layers
- **Hero content text:** z-index 1
- **Hero container (absolute):** z-index 1
- **Page default:** auto
