# Kenhub.com — Page Topology

## Page Overview
- **URL:** https://www.kenhub.com
- **Title:** Learn human anatomy the fastest, most engaging and guided way @Kenhub
- **Theme Color:** #3A5062
- **Viewport:** width=device-width, initial-scale=1.0
- **Layout:** Single-page layout with 6 major sections inside `#panel`

## Sections (top to bottom)

### 1. Topbar (`div.l-topbar`)
- **Height:** 30px
- **Width:** 100% (1440px)
- **Background:** white (#FFFFFF)
- **Container:** `l-topbar-container` — 940px max-width, centered (margin 0 auto), flexbox, right-aligned, gap 10px
- **Content:** Logo link, Pricing, language switcher (EN/DE/PT/ES/FR), Login, Register
- **Sticky:** No (static position)
- **Z-index:** auto

### 2. Hero (`div.l-hero`)
- **Height:** 574px
- **Width:** 100% (1440px)
- **Background:** linear-gradient(#3A5062 → #2D3E4D)
- **Margin-bottom:** 40px
- **Position:** relative (z-index: 1 for text content)
- **Container:** `l-container` — 940px, centered, flex, absolute fill (covers hero)
- **Inner:** `div.hero` — 372px wide, contains:
  - **Images:** `hero_cartoon.webp` and `hero_image.webp` (positioned absolutely)
  - **H1:** "Learn anatomy faster" — 48px, PlutoSansLight, white, margin-bottom 26px
  - **P:** "Start learning in less than 60 seconds" — 18px, PlutoSansRegular, white, margin-bottom 30px
  - **CTA Button:** "Create your free account ➞" — `btn btn-primary`, 14px, PlutoSansMedium, white on #0099FF, 45px height, border-radius 2px, inline-flex, padding 0 20px
  - **Social Proof:** Below CTA:
    - 4 avatar images (36px circles, overlapping by -5px margin-left)
    - Text: "Trusted by **7.1M+** students" — 12px, white, line-height 26px
    - Stars: "★★★★★" — 12px, #FFC026, letter-spacing 1px
    - Rating: "4.8" — 12px, PlutoSansMedium, rgba(255,255,255,0.8)

### 3. Main Content Container (`div.l-container`)
- **Width:** 940px (centered)
- **Margin:** 0 auto (via `l-container`)
- **Total Height:** 3870px
- **Contains 7 inner sections:**

#### 3a. Benefits (`div.benefits`)
- **Height:** 1552px
- **Row 1 — "Spend less time studying"**
  - Left: Image (320×360)
  - Right: H2 heading + checklist with green check icons
  - 4 list items: illustrations, articles, videos, reviewed by experts
- **Row 2 — "Test yourself" (feature row)**
  - Background image with video play overlay
  - H2: "Test yourself", subtitle: "Build your confidence and get exam-ready"
  - 3 list items with green check icons: "Practice at your level", "Fix your weak spots fast", "Study only what matters"
- **Row 3 — "Learn anywhere, anytime"**
  - Left: Devices image (382×236)
  - Right: H2 + 3 checklist items

#### 3b. Callout (within container)
- **Height:** 275px
- **Background:** transparent (page bg)
- H2: "Start learning in less than 60 seconds" + CTA button

#### 3c. Quality Commitment (`div.quality-commitment`)
- **Height:** 368px
- Content about quality standards

#### 3d. Topics Grid (`div.topics`)
- **Height:** 1160px
- Topic boxes with anatomy subject categories

#### 3e. Recommendations (`div.recommendations`)
- **Height:** 200px + 186px
- User testimonials/reviews
- Separated by `<hr>`

### 4. Experts Section (`div.experts`)
- **Height:** 538px
- **Width:** 100% (1440px)
- **Padding:** 80px 0
- **Background:** transparent (white page bg)
- **Text-align:** center
- **Container:** 940px centered
- **Content:**
  - H2: "Our experts"
  - P: "Study with confidence..." (descriptive text)
  - Expert grid: 6 team member cards (image 80×80 circle, name, title)

### 5. Callout Section (`div.callout`)
- **Height:** 275px
- **Width:** 100% (1440px)
- **Background:** #3A5062
- **Padding:** 80px 15px
- **Text-align:** center
- **Content:** H2 (white) + CTA button (same style as hero)

### 6. Footer (`footer`)
- **Height:** 995px
- **Width:** 100% (1440px)
- **Background:** #ECECEC
- **Padding-bottom:** 45px
- **Container:** 940px centered
- **Sections:**
  - **Logos bar:** "Trusted by leading health institutions" + 5 institution logos
  - **Sitemap:** Multi-column layout with links
  - **Quality section:** Quality commitment + Diversity & Inclusion
  - **Social:** Social media icon links (Facebook, YouTube, Instagram, Pinterest)

## Layout Summary
- **Max content width:** 940px
- **Full-width sections:** Hero, Experts, Callout (in-panel), Footer
- **Container pattern:** `l-container` = 940px, centered, used consistently
- **Color scheme:** Dark blue (#3A5062) backgrounds, white text, blue (#0099FF) accent, green checks
- **Typography:** PlutoSans family (Light for headings, Regular for body, Medium for buttons/emphasis)
