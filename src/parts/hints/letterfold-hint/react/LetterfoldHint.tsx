'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "letterfold-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type LetterfoldHintProps = FoundationProps;
/** 対角の二つの角を大きく折り返した、一枚の開いた手紙の補足表示。封筒のV前蓋は撤去し、上84pxと逆側の下56pxの切れた紙の輪郭へ裏面の三角を接続する。本文とnative設定操作は上下の折り返しから離れた中央の読む面へ固定し、長文はその面の中でスクロールする。 */
export default forwardRef<HTMLDivElement, LetterfoldHintProps>(function LetterfoldHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
