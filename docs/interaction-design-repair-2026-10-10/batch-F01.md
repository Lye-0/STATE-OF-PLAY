# Final independent acceptance — F01

Accepted for the reviewed source hashes in `source-hashes.json` (10 part stylesheets plus shared field CSS/runtime). Hashes still match after the final run. No source edits were made by this inspector.

Final follow-up executed30 Chromium cases at390px: 10 controls with native typed selection/clear keyboard focus,10 with password reveal/clear focus, and10 with second-Tab reveal focus. These supplement the earlier80 repair-review cases and100 baseline cases. Final source changes are the writing-saddle62px right padding correction and integration of clear/reveal buttons into three sculpted surfaces; prior desktop,forced-colors,reduced-motion,RTL and autogrow findings remain recorded separately.

- All10 final variants have no painted native input outline; shell focus remains visible.
- No clear/reveal hitbox intersects a native input rectangle. The writing-saddle6px overlap is resolved.
- All clear buttons and all password reveal buttons have visible2px keyboard focus outlines. Password reveal switches native types to text.
- Drafting tray, corner scribe and writing saddle now use transparent idle buttons aligned with native text. The pale blocks over the sculpted edge are gone; each material remains legible and distinct.
- Native selection highlights align with glyphs. The compact seven retain64–68px shells and readable label/help hierarchy.
- Standalone button hitboxes measure36×38px. This review does not substantiate a44px hitbox claim.

`final-narrow-sheet.png` shows the final10 narrow controls. `before-after.png` pairs original and final banked/tray/saddle examples. Full focus/selection screenshots are alongside results.json; reveal focus has its own results and screenshots in reveal-focus/.

No remaining blocking field defect found in this scoped review. This is an isolated component review using real shared runtime; it does not replace gallery integration or exported React verification.

## Immutable reviewed source hashes

```json
{
  "src/parts/textboxes/banked-field/styles.css": "d92f2afd48f5d175bb8d8bce785bd0a7ea6875195648d082cafc0b000e7f671e",
  "src/parts/textboxes/punched-field/styles.css": "9e70e1e6c18519c476d29ca228b478b44da185657a2f2f88394b2a9ae1f514f1",
  "src/parts/textboxes/ruled-caption-field/styles.css": "d52d008816462fad60dbf5dd065c68ee2c7fdb7f3c1076bf1f83245efd8de265",
  "src/parts/textboxes/drafting-tray-field/styles.css": "3348f896bca2bd2cb9c157a5adc3fd12ea0d7817797086398c1abe7c6cd8b974",
  "src/parts/textboxes/corner-scribe-field/styles.css": "2aa57731c840474cb755b4c18bbc34dbe6ec1b2d8fcd5fc037522fc7e36c5f26",
  "src/parts/textboxes/writing-saddle/styles.css": "57e9ded9ffab0979142c084c96d90b1fa6b85024a37f7584cdc2f6c9e6f3f179",
  "src/parts/textboxes/enamel-trough-field/styles.css": "b012f3fae2df8aa30d3c2dcc43ab77bdc523bb7af023f225bf5f65a8232e9fc4",
  "src/parts/textboxes/wax-tablet-input/styles.css": "69ba5bc5addee52ae498c141ccc84c17e368c055f173bf61f64743fa80d0ffca",
  "src/parts/textboxes/porcelain-lip-input/styles.css": "0f577bc74386a865927b001221f8e42304e0d4dfa1630b074124f30cbe63d23f",
  "src/parts/textboxes/interleaf-entry/styles.css": "781a5676f5474cd6d5d2a1d978963456ece7875a0082b05ef07be8ab0b5ef71c",
  "src/shared/text-field-base.css": "bf5deb80034122ab3f18c3b48b63abbb92c7c59b42aa929d3e5debe614f4b453",
  "src/shared/text-field.ts": "0ce2ed6f5d4808aa5a77978fdba581c2bb450dbfbc96afc4f3e57009f3d77db2"
}
```
