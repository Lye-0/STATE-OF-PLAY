# Actions regression repair — 2026-10-10

## Causes and changes

- Inspector settings can scroll the actual calendar/combobox/hint opener outside its preview. The inspector now brings the opener into view before requesting its panel. Offscreen overlay dismissal remains enforced by the exported controller.
- Wizard validation disabled its native focused input before transferring focus. Browsers differ in when they release that focus. Transfer to the wizard context now precedes disabling, preserving next-step focus, controlled refusal and outside focus moves.
- Component fixture servers used SPA fallback. A missing avatar image loaded the gallery HTML without its virtual catalogue plugin. Shared fixture servers now use MPA mode and return a real 404; the browser test checks that status.
- Native table tests compared glyph positions against the whole component, incorrectly rejecting the intentional insertion/removal of selection tools in normal flow. Geometry is now compared within the actual row/search field, retaining exact checks for position, dimensions and font. This exposed a real Receipt Register search-width change, fixed by reserving a full search row and laying selection actions out horizontally only when present.

## Validation

- `npm run typecheck`: app, React and tools passed.
- `npm run test:signature`: 27 checks passed, including pending validation and next-field focus in every wizard variant.
- `SOP_EXPANSION_CATEGORIES=tables npm run test:expansion-50:native`: all 20 tables passed in portable and original JavaScript layouts.
- `SOP_EXPANSION_CATEGORIES=tables npm run test:expansion-50:react`: all 20 tables passed in TSX/JSX × portable/original layouts.
- Direct execution of signature, continuum, workbench and Vite URL unit suites: 51 assertions/tests passed in total (16 + 13 + 14 + 8).
- `npm run test:continuum:gallery`: 8 checks passed, including all four calendar modes, all 13 range inspectors and 320/390/768px details.
- `npm run test:feedback-geometry`: 5 checks passed across all notice/hint/calendar variants, including transient frames, real long-content scrolling and modal ownership.

Browsers ran through real Vite HTTP with the installed Chromium 151. Downloading Playwright's Chromium 153 failed with HTTP 403 (`Domain forbidden`), so that exact browser revision and Windows could not be checked locally. Full `npm run verify` was not run; validation targets the reported failures and related shared behavior. Hosted Actions runs are not followed after push, per the requested workflow.
