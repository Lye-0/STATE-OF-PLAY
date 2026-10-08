'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderRadio, mountRadio} from '../../../../shared/foundation/radio';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "folio-spine-choice",
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
export type FolioSpineChoiceProps = FoundationProps;
/** 一つの厚い背へ、紙束の三項を二つの綴じ輪で収める単一選択。左一本の線をやめ、22pxの共通の背と各項の上下の4pxの綴じ腕を実接続する。読む紙には上/下/小口の三つの厚みを作り、文字とnative丸印を綴じ腕の内側へ固定する。 */
export default forwardRef<HTMLDivElement, FolioSpineChoiceProps>(function FolioSpineChoice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderRadio} mountContent={mountRadio}/>;
});
