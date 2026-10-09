'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as LetterpressInkColorProps };
/** 試し刷りの色面とRGBの組版行を組み合わせたカラーピッカー。余白に重ねた罫とインク見本を持ち、色面と数値は平らな面で読み取れる。 */
export default function LetterpressInkColor(props: ColorProps) {
  return <ColorView {...props} skin="letterpress-ink-color" />;
}
