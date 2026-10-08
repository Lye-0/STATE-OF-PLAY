'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderRadio, mountRadio} from '../../../../shared/foundation/radio';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "perforated-ballot",
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
export type PerforatedBallotProps = FoundationProps;
/** 両側の送り穴を持つ一枚の連続投票紙から選ぶ単一選択。右半券は廃止し、各票の四つの実矩形穴と、票の間を連続させる12pxの往復する折り目へ再設計する。穴は読む面自体を抜き、裏に紙を置かない。番号とnative選択点と文字は固定する。 */
export default forwardRef<HTMLDivElement, PerforatedBallotProps>(function PerforatedBallot(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderRadio} mountContent={mountRadio}/>;
});
