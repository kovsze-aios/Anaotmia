# Chrome Modern Web Guidance Guardrails (Core Web Vitals & Baseline)

Wytyczne wydajnościowe i standardy **Baseline Web Platform** obowiązujące we wszystkich komponentach multimedialnych CKE (`/matura`, `CkeExamTasksSection`) oraz interaktywnych rycinach podręcznika (`TextbookFigureCard`, `AtlasPeekDrawer`).

---

## 1. Zero Cumulative Layout Shift (`CLS = 0`)

* **Jawne wymiary mediów (`width` i `height`)**: każdy element `<img>` wyświetlający wycinek z arkusza CKE, stronę PDF 1:1 lub rycinę podręcznikową OER musi mieć jawnie podane atrybuty `width` i `height` (lub kontener `aspect-ratio` z zarezerwowaną minimalną wysokością `min-h-[260px]` / `aspect-[16/10]`), zanim obraz zostanie pobrany z sieci.
* **Leniwe ładowanie i asynchroniczne dekodowanie**: wszystkie ryciny poniżej linii zgięcia (*below the fold*) oraz skany stron arkusza CKE muszą używać `loading="lazy"` oraz `decoding="async"`, aby nie blokować głównego wątku ani pierwszego renderu (`LCP`).
* **Stabilne nakładki hotspotów**: współrzędne hotspotów (`x`, `y` w przestrzeni `0–100%`) muszą być osadzone w kontenerze o stałych proporcjach (`relative aspect-[...] w-full`), dzięki czemu szpilki nigdy nie przesuwają się podczas wczytywania.

## 2. Szybki czas reakcji na interakcję (`INP < 200 ms`)

* **Leniwe montowanie WebGL / Three.js**: `AtlasExplorer` wewnątrz `AtlasPeekDrawer` jest ładowany przez `next/dynamic(..., { ssr: false })` i montowany wyłącznie wtedy, gdy użytkownik aktywuje mostek 2D → 3D (`[ 🫀 Pokaż tę strukturę w 3D ]`) lub kliknie termin anatomiczny (`focusName !== null`). Zamknięcie szuflady zwalnia kontekst WebGL.
* **Lekkie przełączniki UI**: tryb **Image Occlusion (`Tryb Szpilek na Rycinie`)**, wybór szpilki, filtr NOIR oraz przełącznik kroków `lemo-opuscar` operują na prostym stanie Reacta bez przebudowy układu strony (*layout thrashing*).

## 3. Baseline HTML & Dostępność (a11y)

* **Natywny element `<dialog>`**: wszystkie pełnoekranowe powiększenia rycin CKE, stron PDF oraz interaktywnych schematów podręcznikowych używają natywnego `<dialog>` z metodami `showModal()` i `close()` (zapewniających natywne warstwy wierzchu *Top Layer*, pułapkę fokusu oraz zamykanie klawiszem `Escape`).
* **Pełna obsługa klawiatury**:
  * `Escape` zamyka otwarty podgląd `<dialog>` lub szufladę `AtlasPeekDrawer`.
  * `ArrowLeft` / `ArrowRight` przełączają kroki wyjaśnienia `lemo-opuscar` lub kolejne szpilki w aktywnej rycinie.
  * Wszystkie interaktywne kontrolki mają wyraźne etykiety `aria-label` / `aria-pressed` i klasę `.focus-ring`.
