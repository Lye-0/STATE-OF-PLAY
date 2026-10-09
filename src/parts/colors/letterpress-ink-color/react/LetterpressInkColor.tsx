'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as LetterpressInkColorProps };
/** インクの三成分を、活版の濃度見本として縦に読む色校正。大きなセリフ見出し、190pxの色面、区切りを共有する58pxの実RGB行の三段を確保する。紙色の上へ細かい飾り文字を増やさず、実色の円形見本とHEXを読める大きさで示す。文字や入力座標は押下・hover・値変更で移動しない。 */
export default function LetterpressInkColor(props: ColorProps) {
  return <ColorView {...props} skin="letterpress-ink-color" />;
}
