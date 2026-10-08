# EXPANSION-50 visual refinement

The October 2026 review identified 229 redesigns and 286 adjustments among the
730 EXPANSION-50 parts. This revision addresses those 515 parts (484 A, 31 B).
The other 215 parts retain their authored source. Liquid Glass is outside this
revision's scope.

## Design decisions

- A treatments connect their silhouette, seams, folds, tracks or moving pieces
  to the control's function. Labels, values and native input geometry remain
  stable; decoration does not replace the actual control.
- B treatments retain compact, familiar controls and readable state changes.
- Heavy frames, stacked shadows, glowing edges and competing decorative lines
  are reduced where they obscured the hierarchy. Selected text contrast is
  checked separately from the appearance of the unselected surface.
- Loaders and ornaments use complete compositions, including their static
  reduced-motion presentation. Forced colors retain the native controls.

## Pagination behavior

The 20 expansion pagers opt into `paginationLayout: 'anchored'`. This separates
the changing number strip from the previous/next controls, keeping the latter
at fixed positions as ellipses appear and disappear. The shared runtime keeps
keyboard focus on the activated control after rerender, moving it to the
current page when the control becomes disabled at an endpoint. Other pagers
keep their existing inline layout by default.

## Verification

`npm run test:expansion-review` includes regressions for all 20 pager arrow
positions at 320/390/768/1500px across 12 page states, repeated keyboard
activation, endpoint focus, page-label/arrow contrast under an inherited gallery
text color, five B avatar labels that
previously shifted on hover, the engraved field's clear control, and a hint
heading clipped by its scrollable content.

The expansion browser, native and React suites cover all 730 additions. Their
Vite fixture servers disable HMR because those suites inspect fixed exports;
watcher behavior has its own tests. Type checking, the production build, and
the expansion/foundation unit suites (23 passing tests) were also run. The
full `npm test` run was stopped during the exhaustive delivery ZIP round trip;
that complete suite is not reported as passing.

The visual evidence and per-part before/after explanations are delivered in a
standalone HTML outside Git, together with the capture tools and logs in one
deletable folder. Visual judgments are distinct from automated checks. Browser
validation here uses Linux Chromium; it does not establish full cross-browser
or exhaustive accessibility conformance.
