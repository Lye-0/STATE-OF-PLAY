# D02 strict hover/focus addendum

Accepted at hashes in `hover-final-source-hashes.json`. This addendum supersedes the earlier review's implicit hover-stability assumption.

The first pass exercised all ten D02 menus plus file-jacket-context and ceramic-file-context at390/320/RTL/forced colors, all750px high:48 scenes. Every default action received actual focus; Copy received pointer hover. Each sample compared every row's width, height and relative vertical position, panel dimensions and viewport containment against rest.

The expanded check found one remaining defect: stepped-document-context Delete shrank46→45px on focus because its danger boundary lost a pixel; the panel shrank505→504px and Share moved up1px. The other eleven designs remained stable, and no panels escaped the750px viewport.

After the developer retained the danger border during hover/focus, `hover-final.ts` rechecked all four modes:4/4 passed with invariant geometry. `hover-addendum/results.json` preserves the original48-case evidence; `hover-final/results.json` records the correction. Final source hashes were checked against disk without drift. No source edits were made by the reviewer.
