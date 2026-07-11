# Benefits Section Specification

## Overview
- **Target file:** `src/components/Benefits.tsx`
- **Interaction model:** Static (except video play overlay)
- **Context:** Part of the main content area inside `div.l-container`

## DOM Structure
```
div.benefits
  div.benefits__row.benefits__row--equal
    div.image → img (320x360)
    div.text
      h2 → "Spend less time studying"
      ul.benefits__list
        li → Check icon + "1000s of high quality anatomy illustrations"
        li → Check icon + "1000s of detailed anatomy articles"
        li → Check icon + "High-quality videos created by anatomy experts"
        li → Check icon + "Reviewed by expert medical professionals"

  div.benefits__row.benefits__row--feature
    div.content
      div.video (background-image)
        div.video-controls
        div.video-play-overlay → click to play
      div.text
        h2 → "Test yourself"
        div.subtitle → "Build your confidence and get exam-ready"
        ul.benefits__list
          li → Check + "Practice at your level" / "100s of beginner to advanced quizzes"
          li → Check + "Fix your weak spots fast" / "Spaced repetition quizzes train your memory"
          li → Check + "Study only what matters" / "Create custom quizzes tailored to your exam needs"

  div.benefits__row.benefits__row--equal
    div.image (lazy-load) → devices image
    div.text
      h2 → "Learn anywhere, anytime"
      ul.benefits__list
        li → Check + "1000s of videos, articles, and quizzes all in one place"
        li → Check + "Seamlessly switch between phone, tablet, or computer"
        li → Check + "Downloadable resources for offline studying"
```

## Computed Styles

### benefits__row
- Display: flex (for --equal variants)
- Gap/Spacing determined by layout

### benefits__row--equal
- Equal two-column layout (image | text)

### benefits__row--feature
- Feature layout with background image on one side

### h2
- Font-family: PlutoSansLight
- Color: same as body text or #495354
- Size: likely ~30-36px

### .circle.green (check icons)
- Background: green (specific shade TBD)
- Border-radius: 50%
- Width/Height: circular

### List items
- Font-size: ~16px
- Color: #495354

## Text Content
See HTML extraction for full verbatim text.

## Assets
- Home face: `/images/home_face-7897ee9d.jpg`
- Video background: `/images/index_header_background-08c9bf24.jpg`
- Devices: will need to download separately
- CheckIcon from icons.tsx

## Behaviors
- Video play overlay: onClick should play a background video (Stimulus controller)
- For clone: We'll show the video overlay as a static element with play button visual
