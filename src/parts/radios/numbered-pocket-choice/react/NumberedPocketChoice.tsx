'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderRadio, mountRadio} from '../../../../shared/foundation/radio';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "numbered-pocket-choice",
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
export type NumberedPocketChoiceProps = FoundationProps;
/** 紙の右端を、番号の付いた横差込みの整理箱へ収める単一選択。上の短線だけのカードをやめ、紙の24pxを74pxの実側ポケットへ重ね、入口の上下の返しと奥7pxの縫い止めで保持する。番号を箱の面へ固定し、読む内容とnative丸印は露出した紙の上へ置く。 */
export default forwardRef<HTMLDivElement, NumberedPocketChoiceProps>(function NumberedPocketChoice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderRadio} mountContent={mountRadio}/>;
});
