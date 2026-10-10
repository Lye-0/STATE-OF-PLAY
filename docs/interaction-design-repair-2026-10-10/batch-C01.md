# C01 independent common-behavior acceptance

Accepted for the10 shared source files and exact SHA256 values in `full-source-hashes.json`. Hashes were rechecked unchanged after final browser checks. The inspector made no application-source edits.

## Verified on final source

- All50 calendar variants at390px open normally, retain internal panel scrolling, and close when their owner leaves either the page viewport or a nested scrollport. Toggle and both date-input ARIA states return false. No calendar subtree animation remains running after the nested-scroll close. Closing does not restore focus to an offscreen owner or change the requested page scroll position.
- Both modal-dialog and native-popover top-layer cases accept a visible owner despite an offscreen clipping ancestor above the top layer. Scrolling that owner's own inner scroller out of view still rejects it. A top-layer anchor itself also remains correctly visible.
- All50 hint variants were exercised at390px with a partially visible owner. All48 variants containing an authored action button survived real mouse-down/up without page scroll movement or vertical content overflow. paper-popover and compact-popover have no authored action and were recorded separately, not claimed as action passes. The pressed action transform is none.
- Offscreen public show() on representative resonance/base hints keeps the panel hidden, aria-expanded false, zero running artwork animations, and pageY unchanged.
- Actual running gallery4180 at390px: aurora-calendar opened at pageY309; scrolling1000px closed it, set expanded false and left pageY1309. Interactive essential-popover action closed its panel with pageY16317 unchanged. Gallery screenshots and results accompany this report.

## Additional C01 evidence (unchanged relevant motion/overflow code)

A200-case frame probe covered every50 toast and50 hint variant at980px and390px, sampling32 animation frames while opening and15 after action. Short single notifications never developed vertical scroll overflow. No sampled pageY changed. Outer notification motion is now stationary while the inner authored artwork remains animated.

All50 toast variants were also filled with8 long notifications in a500px-high viewport. Their stack retained overflow-y:auto, a positive usable scroll range, and access to the final notification after scrolling to the bottom. The repair therefore preserves genuine long-stack scrolling.

## Issues found during review and resolved

1. Initial visibility helper clipped valid modal/popover descendants against ancestors above the top layer. Main agent corrected the top-layer boundary; final modal and popover tests pass.
2. Base-family hints still used scrolling focus restoration.32 real-action cases jumped18–29px with a partially visible owner. Main agent added preventScroll; final48 authored actions have zero jump.
3. Callers could advertise/start an overlay after hidden-owner show() was rejected. Guards now preserve closed ARIA and artwork state in representative checks.

## Remaining part-specific visual observation

raised-caption-popover retains9px horizontal scroll-width excess inside its overflow-x:hidden content wrapper at both980/390. Its authored heading uses margin:-9px -9px, so decoration extends beyond the wrapper and is clipped. This produces no native scrollbar and no action jump; it is not a remaining shared behavior blocker. Consider adjusting that part's heading margin or wrapper padding during its design review.

## Evidence and limitations

- `calendar-results.json`: final50 calendar cases, ARIA/motion cleanup, visible modal-owner reproduction.
- `edge-results.json`: final50 hint cases plus modal/popover clipping boundary tests.
- `gallery-results.json`, `gallery-hint-results.json`, gallery PNGs: actual-gallery integration.
- Parent C01 directory: initial findings,200-case animation measurements,50 long-stack results, hidden-owner probes.

Initial actual-gallery hint action attempt targeted the first tooltip-only variant (aurora), whose action is intentionally hidden. The corrected integration run explicitly targets interactive essential-popover and passes. No hidden action was forced clickable. Standalone fixtures run real authored CSS/runtime; they are not claimed as React-export verification.


Raised Caption heading clipping was subsequently corrected and independently accepted in D05.
