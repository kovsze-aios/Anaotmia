# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Interaction model:** Static (CTA button navigates to registration)
- **Screenshot:** `docs/design-references/kenhub-fullpage-desktop.png`

## DOM Structure
```
div.l-hero
  div.l-container (absolute fill, z-index 1, flex, centered)
    img.hero__image (background decorative)
    img.hero__image--variant (AB test variant)
    div.hero (372px wide)
      h1 → "Learn anatomy" br "faster"
      p → "Start learning in less than 60 seconds"
      a.btn.btn-primary → "Create your free account ➞"
      div.hero-social-proof
        div.hero-social-proof__avatars
          4x div.hero-social-proof__avatar → img (36px circles)
        div.hero-social-proof__text
          p → "Trusted by **7.1M+** students"
          div.hero-social-proof__rating
            span.hero-social-proof__stars → "★★★★★"
            span → "4.8"
```

## Computed Styles

### l-hero
- Height: 574px
- Background: linear-gradient(#3A5062 → #2D3E4D)
- Margin-bottom: 40px
- Position: relative

### l-container (inside hero)
- Position: absolute
- Top/Left/Right/Bottom: 0
- Z-index: 1
- Display: flex
- Align-items: center
- Max-width: 940px
- Margin: 0 auto (via .l-container class)

### div.hero
- Width: 372px
- Height: 242px
- Display: block

### h1
- Font-size: 48px
- Font-family: PlutoSansLight
- Line-height: 57.6px
- Color: #FFFFFF
- Margin-bottom: 26px
- Letter-spacing: -0.16px
- Position: relative
- Z-index: 1

### p (subtitle)
- Font-size: 18px
- Font-family: PlutoSansRegular
- Line-height: 26px
- Color: #FFFFFF
- Margin-bottom: 30px
- Position: relative
- Z-index: 1

### CTA Button (.btn.btn-primary)
- Font-size: 14px
- Font-family: PlutoSansMedium
- Line-height: 18px
- Color: #FFFFFF
- Background: #0099FF
- Height: 45px
- Padding: 0 20px
- Border-radius: 2px
- Display: inline-flex
- Align-items: center
- Gap: 4px
- Margin-right: 14px
- Position: relative
- Z-index: 1

### Social Proof Container
- Display: flex
- Flex-direction: row
- Align-items: center
- Gap: 10px

### Social Proof Text
- Font-size: 12px
- Font-family: PlutoSansLight
- Line-height: 14.4px
- Color: rgba(255,255,255,0.8)
- Text-align: left

### Stars
- Font-size: 12px
- Font-family: PlutoSansMedium
- Letter-spacing: 1px
- Color: #FFC026

### Avatars
- 36px width/height circles
- Margin-left: -5px (overlapping)
- Border: 2px solid white (if overlapping)

## Text Content
- "Learn anatomy faster"
- "Start learning in less than 60 seconds"
- "Create your free account ➞"
- "Trusted by 7.1M+ students"
- "★★★★★ 4.8"

## Assets
- Hero cartoon: `/images/hero_cartoon-2d4e870a.webp`
- Hero image (variant): `/images/hero_image-35dbe65a.webp`
- Avatar 1: `/images/sflp-avatar-1-587f00dc.webp`
- Avatar 2: `/images/sflp-avatar-2-118d1967.webp`
- Avatar 3: `/images/sflp-avatar-3-53d0e09d.webp`
- Avatar 4: `/images/sflp-avatar-4-a3743e40.webp`

## Responsive Behavior
- Desktop: Full layout with hero image on left, text on right
- Mobile: Stacked layout, hero image full-width, text centered
- `hidden-md` class on line break suggests mobile breakpoint
