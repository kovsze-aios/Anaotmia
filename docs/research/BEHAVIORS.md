# Kenhub.com — Interactions & Behaviors

## Interaction Summary
The kenhub.com homepage is **mostly static** with minimal JavaScript-driven interactions. No scroll-driven animations, parallax, or scroll-snap were detected. The page is content-oriented with a focus on clear presentation.

## Scroll Behavior
- **Default browser scroll** — no smooth scroll library detected (no Lenis, Locomotive Scroll, or custom scroll containers)
- **No scroll-snap** detected
- **No scroll-driven animations** (no IntersectionObserver-based fade-in/slide-in)
- **No sticky header** — the topbar is static, scrolls away with content

## Navigation
- **Topbar links** are standard `<a>` tag navigations
- **Language switcher** likely shows a dropdown on click (javascript-driven)
- **Login/Register** links navigate to auth pages
- **Pricing** links to /en/pricing

## Hover States
- **Buttons (`btn-primary`):** Likely darkens/has hover effect (standard pattern)
- **Links in footer:** Standard text decoration on hover
- **Social media icons:** Hover likely changes opacity or background
- **Topic boxes:** Likely have hover effects (elevation/color change)
- **Expert cards:** Likely subtle hover effects

## Click Interactions
- **CTA buttons:** Navigate to registration page
- **Language switcher:** Opens language selection dropdown
- **Video play overlay** (in "Test yourself" section): Click triggers video playback via Stimulus.js controller (`data-controller="home"`, `data-action="click->home#playBackgroundVideo:prevent"`)

## Page-Level Features
- **Responsive:** Uses `hidden-md` class for responsive element hiding at different breakpoints
- **AB testing:** Elements with `ab-home-page-image--original` and `ab-home-page-image--variant` classes (A/B test for hero image)
- **Social proof variant:** `.ab-home-social-proof--variant` — currently `display: none`
- **Lazy loading:** Images use `data-lazy-load` attribute with `<noscript>` fallbacks
- **Stimulus.js** controllers for interactive behavior (`data-controller="home"`)

## Responsive Changes (Preliminary)
- **Desktop (1440px):** Full layout with 940px centered content
- **Tablet (768px):** Likely narrower container, possible column stacking
- **Mobile (390px):** Stacked layout, full-width containers
- **`hidden-md` class:** Suggests a medium-breakpoint responsive utility

## Stateful Components
- **Language dropdown:** One-at-a-time open state
- **Video player:** Click-to-play with overlay state change
- **None** detected for scroll-triggered, tabbed, or accordion patterns

## Animations
- **None detected** for entrance, exit, or micro-interactions
- Page is statically rendered with no CSS keyframe animations or transitions beyond basic hover effects
