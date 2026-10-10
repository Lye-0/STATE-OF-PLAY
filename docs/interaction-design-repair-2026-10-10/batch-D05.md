# D05 committed scope

perpetual-desk-calendar, folio-drawer-table, raised-caption-popover

# D04 and D05 independent review

Accepted the final thirteen styles at the exact SHA-256 values in `final-source-hashes.json`. No source files were edited by this reviewer. The final hash check found no drift.

D04 scope (ten): console-line-notice, sealed-envelope-notice, stepped-message-notice, blueprint-callout-hint, looped-note-hint, ceramic-caption-hint, tailored-label-hint, letterfold-hint, desk-blotter-calendar, instrument-date.

D05 scope (three): perpetual-desk-calendar, folio-drawer-table, raised-caption-popover.

## Evidence and coverage

- `review.ts` / `results.json`: 91 scenes, thirteen designs at baseline390, current390,320,980, RTL, forced colors and reduced motion. Baseline markup, CSS and runtime were read from commit08005472.
- `review-round2.ts` / `round2/results.json`: 42 scenes rechecking seven corrected styles in all six current modes. Twenty animation frames per scene measured scroll extent. No short feedback overflow, action scroll jumps, failed date selection or failed legitimate long-content scrolling.
- `portable.ts` / `portable-results.json`: final generated portable JavaScript exports, all thirteen at320/390/980;39 cases, zero page errors or short feedback overflow. Calendar selection, table sorting/checking and feedback actions operated.
- `gallery.ts` / `gallery-results.json`: final live gallery4180, all thirteen at390;13 cases with no short feedback overflow or action scroll jumps.
- `{id}-before390.png` and `{id}-after390.png` are the requested actual390px baseline/final screenshots. Seven rejected intermediate after images are preserved in `initial-rejected-after/`. Final portable and gallery captures use `-portable{width}.png` and `-gallery390.png`.

## Visual critique and resolved findings

The initial compacting pass exposed seven actual visual regressions. The envelope lacked an opaque reading face and its seal crowded the title; the stepped notice icon still occupied the title position; three calendars retained18/20px header tracks for40px navigation controls; the ceramic heading sat above its opaque face; the loop cutout intruded into the settings label. The second pass resolves each of these.

The final envelope keeps its side fold and small seal while presenting continuous opaque paper. The stepped notice retains its bottom plate with its icon in the title flow. Both notices are ordinary compact notifications rather than large illustrated cards, and preserve separate close/action controls. The console notice retains its terminal line identity. These surfaces remained legible against the deliberately dark fixture background.

The ceramic arch now stands above an opaque text face, and the loop cutout stays at the body edge outside the label column. Blueprint, tailored and letterfold preserve their distinct edges without stealing the reading area. The raised caption no longer has the negative-heading-margin9px horizontal overflow; its practical title and action remain readable.

All three calendars retain their respective instrument, blotter and desk material cues. Month headings and previous/next controls are fully visible. Every measured header, day and footer control lies inside the full panel bounds both horizontally and vertically in all six revised modes. Panel scrollWidth equals clientWidth; this is real layout containment, not a hidden-overflow workaround. Narrow day cells and13px day text remain legible. RTL reverses the date grid and supports the controls without clipping.

The folio table remains recognizably a table with a restrained drawer surround. Its horizontal scrolling at narrow widths is intentional and functional; removing that scroll would hide useful columns. Long notice stacks and long hint content likewise retain genuine vertical scrolling. No blanket overflow suppression was used as an acceptance criterion.

This is a Chromium visual/interaction review at the stated viewport and preference combinations, not a cross-browser certification.
