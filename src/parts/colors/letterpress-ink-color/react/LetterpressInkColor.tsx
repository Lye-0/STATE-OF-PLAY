'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as LetterpressInkColorProps };
/** インクの濃度を確認する活版台。大きい現在色と印刷向け数値を上部へ集める。 */
export default function LetterpressInkColor(props: ColorProps) {
  return <ColorView {...props} skin="letterpress-ink-color" />;
}
