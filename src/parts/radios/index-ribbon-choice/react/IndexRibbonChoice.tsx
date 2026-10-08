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
/** 資料の索引帯を差し替えるように選ぶ。細長い番号欄と本文の間に選択印を置く。 */
export default forwardRef<HTMLDivElement, IndexRibbonChoiceProps>(function IndexRibbonChoice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderRadio} mountContent={mountRadio}/>;
});
