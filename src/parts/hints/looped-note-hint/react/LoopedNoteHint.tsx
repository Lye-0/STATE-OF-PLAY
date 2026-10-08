'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "looped-note-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type LoopedNoteHintProps = FoundationProps;
/** 大きい閉じた横ループで、補足の紙を一つの縦の切口へ留める表示。紫の標準面を廃し、84×72pxの厚い楕円ループと、52pxの実縦スリット、一枚の読む紙を作る。ループは紙へ26px重なり、読面はループより右へ固定する。縦に伸びる本文でも留め位置だけが中央へ追随する。 */
export default forwardRef<HTMLDivElement, LoopedNoteHintProps>(function LoopedNoteHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
