'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderRadio, mountRadio} from '../../../../shared/foundation/radio';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "clasp-band-choice",
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
export type ClaspBandChoiceProps = FoundationProps;
/** 二つの実顎が選択帯の端を抱える、留め金の単一選択。元の二顎の主題を保持し、細い括弧を上下8px・奥7pxの64px高の金具へ整える。帯の端に10px以上重ね、選択時は顎だけ3px閉じる。本文とnative選択点は固定する。 */
export default forwardRef<HTMLDivElement, ClaspBandChoiceProps>(function ClaspBandChoice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderRadio} mountContent={mountRadio}/>;
});
