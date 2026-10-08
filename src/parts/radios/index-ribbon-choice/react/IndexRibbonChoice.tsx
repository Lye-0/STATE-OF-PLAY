'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderRadio, mountRadio} from '../../../../shared/foundation/radio';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "index-ribbon-choice",
  "kind": "radios",
  "variant": "soft",
  "label": "あなたの制作モード",
  "description": "",
  "defaultValue": "cloud",
  "required": true,
  "items": [
    {
      "value": "local",
      "label": "Local",
      "description": "手元の環境で、静かに。",
      "badge": "01",
      "icon": "file"
    },
    {
      "value": "cloud",
      "label": "Cloud",
      "description": "どこからでも、つながる。",
      "badge": "02",
      "icon": "spark"
    },
    {
      "value": "hybrid",
      "label": "Hybrid",
      "description": "両方のよさを、ひとつに。",
      "badge": "03",
      "icon": "home"
    }
  ]
};
export type IndexRibbonChoiceProps = FoundationProps;
/** 一枚の索引リボンを、各札の上下の通し口へ交互に通す単一選択。親の前面帯を廃止し、札の後ろに連続する布と、札の大きい縦の実抜きから前へ現れる同じ42pxの布を分ける。上下6pxは紙が布を覆い、中央の番号と留め縁は布の前に表示する。文字とnative点は固定する。 */
export default forwardRef<HTMLDivElement, IndexRibbonChoiceProps>(function IndexRibbonChoice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderRadio} mountContent={mountRadio}/>;
});
