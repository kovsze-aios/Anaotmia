# Topbar Specification

## Overview
- **Target file:** `src/components/Topbar.tsx`
- **Interaction model:** Static (links navigate, language dropdown likely JS-driven - we'll use static links)
- **Purpose:** Top navigation bar with logo, pricing link, language switcher, login/register

## DOM Structure
```
div.l-topbar
  div.l-topbar-container (flex, max-width 940px, right-aligned)
    a.logo → Kenhub (with SVG icon)
    a → Pricing
    div.language-switcher → English ▾
    a → Login
    a → Register (button)
```

## Computed Styles

### Container (l-topbar)
- Width: 100% (1440px actual)
- Height: 30px
- Background: #FFFFFF
- Position: static

### Inner Container (l-topbar-container)
- Width: 940px
- Max-width: 940px
- Margin: 0 auto
- Display: flex
- Flex-direction: row
- Justify-content: flex-end
- Align-items: center
- Gap: 10px
- Font-size: 16px
- Font-family: PlutoSansRegular, Helvetica, Arial, sans-serif
- Color: #000
- Letter-spacing: -0.16px

### Logo
- Position: absolute (or flex-start via margin-right: auto?)
- Contains SVG icon + "Kenhub" text

## States & Behaviors
- **Hover on links:** Standard text decoration/browser default
- **Language switcher:** Shows dropdown on click (we'll use a simple static version)

## Text Content
- "Kenhub" (logo)
- "Pricing" (link to /pricing)
- "English" (language - with globe icon + caret)
- "Deutsch", "Português", "Español", "Français" (dropdown options)
- "Login"
- "Register"

## Assets
- Logo icon: KenhubLogoIcon from icons.tsx
- Globe icon: GlobeIcon from icons.tsx
- Caret icon: CaretDownIcon from icons.tsx

## Responsive Behavior
- All items visible on desktop, compact on mobile (likely hamburger menu)
