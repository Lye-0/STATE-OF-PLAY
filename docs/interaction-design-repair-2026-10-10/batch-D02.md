# D02 independent acceptance — ten compact context menus

Accepted on the13 exact stylesheet/shared-runtime SHA256 values in `final-source-hashes.json`, verified unchanged after final checks. No application-source edits by the inspector.

## Verification

- 80 initial authored-source scenes:10 styles × HEAD-before/current390/desktop980/custom-long-label320/custom-long-label390/RTL390/forced-colors320/reduced-motion390.70 current scenes exercised actual Shift+F10 opening, checkbox toggle, direction-appropriate submenu arrows, return-focus restoration, End and Escape.
- 14 follow-up scenes verified corrected ledger/ribbon density in the same seven current modes;7 more verified the folding submenu header correction.
- 22 real generated portable JavaScript export scenes served through Vite: initial10 ×320/390 plus final folding correction ×320/390. Actual pointer hover, submenu click, ArrowLeft and Escape all pass; no page errors or horizontal panel overflow.
- 10 actual-gallery4180 scenes at390px: visible opener, submenu click, keyboard back/dismiss all pass. Gallery screenshots are included.

All checked rows remain usable; ordinary rows are45px tall, ledger's numbered/icon rows55px, and longer descriptions expand intentionally. Text is14px. Long custom Japanese/English labels and compound shortcuts wrap without overlapping. Panels stay within the viewport and remain internally scrollable when content is long. Check state and disabled-item presentation remain understandable in forced colors; RTL reverses navigation and submenu direction correctly.

## Visual judgment

The menu now occupies substantially less screen space without losing each A material: folded dossier, stepped document, numbered ledger, slipcase edge, rail clamp, stitched groups, open corners, bookplate, pocket and ribbon remain distinguishable and understandable.

Before authored intrinsic menu heights were779–929px; final heights are458–557px for the same default actions. These are seven-action menus with groups and descriptions, not seven overscaled decorative cards. The ledger still uses a little more row space for its numbering and annotation line; that supports its material rather than overwhelming the operation.

A deliberately high-contrast red REAR TEXT background was placed behind every standalone scene. Final open menu panels fully cover it, including material gaps between action groups. The detached bookplate demo target itself retains intentional open gaps; these are outside the menu panel. There is no rear-text bleed through the opened menu's reading surface.

## Findings resolved during review

1. Ledger and ribbon initially retained high-specificity18px/16px action padding despite the generic8px override. Main agent corrected the exact data-menu-action hover/focus selectors. Ledger menu height fell661→521px and ribbon616→504px at390. Normal, focused and hovered geometry remains stable in portable/source checks.
2. Folding dossier's narrow submenu header squeezed ESC into three vertical letters and gave the40px back button a32px column. Main agent changed the header columns to40px/minmax/max-content and reserved28px nowrap for ESC. Final seven modes measure the hint28×15px, one line; screenshots confirm readable back/title/hint separation.

## Artifacts and limits

- `final-menu-sheet.png`: final open panels, cropped only for comparison.
- `before-after-key-three.png`: HEAD-before/final pairs for folding, ledger and ribbon. Before uses HEAD part CSS with unchanged shared runtime, clearly separated from current screenshots.
- `results.json`, `final-two/results.json`, `final-fold/results.json`: authored metrics and behavior.
- `portable-results.json`, `final-fold/portable-results.json`: actual portable-export checks.
- `gallery-results.json`: actual-gallery checks.
- Original/full screenshots include open, submenu, long content, RTL, forced colors, reduced motion and portable hover.

The first final-fold tool launch was not executed because automatic approval review timed out. The explicitly permitted retry succeeded; final-fold and portable verification completed. No source blocker remains. This review verifies JavaScript portable exports, not a separate React render.
