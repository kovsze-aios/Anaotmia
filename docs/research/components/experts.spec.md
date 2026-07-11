# Experts Section Specification

## Overview
- **Target file:** `src/components/Experts.tsx`
- **Interaction model:** Static
- **Screenshot:** `docs/design-references/kenhub-fullpage-desktop.png`

## DOM Structure
```
div.experts (full-width)
  div.l-container (940px, centered, text-align center)
    h2 → "Our experts"
    p → "Study with confidence: ..."
    div.experts__team (flex row, wrap, centered)
      div.expert × 6
        div.img (lazy-load)
          img (80x80 circle)
        div.details
          div.name → "Alessio" etc.
          div.title → "PT, PhD" etc.
```

## Computed Styles

### experts section
- Width: 1440px (full)
- Padding: 80px 0
- Text-align: center
- Background: transparent

### Container
- Max-width: 940px
- Margin: 0 auto

### Expert card
- Display: inline-flex or flex column
- Align-items: center
- Gap between avatar and text

### Expert image
- Width: 80px
- Height: 80px
- Border-radius: 50%

### Expert name
- Font-weight: bold or medium
- Font-size: ~16px

### Expert title
- Color: muted/gray
- Font-size: ~14px

## Expert Data
| Name | Title |
|------|-------|
| Alessio | PT, PhD |
| Christina | MD, MSc |
| Cinthia | MD |
| Claudia | MD |
| Danijel | PhD |
| Dimitrios | MD, PhD |

## Behaviors
- Static section with no interactions beyond hover on images
