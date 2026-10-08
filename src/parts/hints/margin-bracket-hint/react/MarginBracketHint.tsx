'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "margin-bracket-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type MarginBracketHintProps = FoundationProps;
/** 対角の二つの短い括弧で、読む紙の始まりと適用の終わりを保持する表示。元の開いた括弧を維持し、左右の長線を90pxの上左/下右へ縮める。38pxの横腕と6pxの太さを揃え、紙との10pxの離れと、下の実適用面への支持を整える。 */
export default forwardRef<HTMLDivElement, MarginBracketHintProps>(function MarginBracketHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
