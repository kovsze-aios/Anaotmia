# Attribution

## 3D anatomy data — BodyParts3D

The interactive 3D Atlas (`/`) renders geometry from **BodyParts3D**.

> BodyParts3D, © The Database Center for Life Science, licensed under
> **Creative Commons Attribution 4.0 International (CC BY 4.0)**.

- License: <https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html>
- Dataset: <https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html>
- License terms: <https://creativecommons.org/licenses/by/4.0/>
- Source geometry: `isa_BP3D_4.0_obj_99.zip`, BodyParts3D 4.0
- Publication: Mitsuhashi et al. (2009), *BodyParts3D: 3D structure database for
  anatomical concepts.* <https://doi.org/10.1093/nar/gkn613>

**This attribution is a licence condition, not a courtesy.** CC BY 4.0 requires
credit wherever the data is used, so it must remain visible in the application.
It is currently surfaced in the atlas under **„Źródło i licencja"** / **„O tym
atlasie"**, which opens a panel carrying the notice and links above. Do not
remove that panel or its entry points without replacing the credit elsewhere.

### Adaptations made upstream

Axes and units converted from millimetres/Z-up to metres/Y-up; geometry
simplified with meshoptimizer at a 0.2% relative error limit per structure;
normals quantised to signed 16-bit; packed into binary chunks; display system
groupings and colours curated. The source contains 2,234 individual OBJ meshes,
all of which remain represented, across 3,432 named FMA concepts.

### Scope and limits

BodyParts3D is an **adult male** reference anatomy derived from TARO MRI data
with anatomical illustration refinements. It does not model every human
structure or anatomical variation. The atlas is an educational reference —
**not a diagnostic or clinical tool.** The in-app "about" panel states this to
the reader, in Polish.

## Atlas viewer engine

The WebGL viewer is adapted from **[ashemag/human-atlas](https://github.com/ashemag/human-atlas)**
(MIT License, © Asher Mancinelli et al.). Ported here from Vite/`vinext` to this
project's Next.js App Router, restyled onto our design tokens for light/dark
theming, and localised to Polish.

Anatomical **structure names remain in English** — they come from the
BodyParts3D dataset, which has no Polish translation upstream. All surrounding
interface copy is Polish.

## Asset hosting

The ~57 MB of mesh chunks are **not vendored into this repository**. They are
served from jsDelivr against a pinned upstream commit; see `ATLAS_COMMIT` in
[`src/services/atlasService.ts`](src/services/atlasService.ts). Bumping that
constant is the only supported way to move to different geometry.
