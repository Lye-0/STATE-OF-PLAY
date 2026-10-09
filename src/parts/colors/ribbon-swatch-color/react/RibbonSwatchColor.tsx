'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as RibbonSwatchColorProps };
/** 独立した短いリボン見本を並べるカラーピッカー。見本は留めた上端から折り目と二股の端へ続き、色名は素材の外で読む。長い積層板の構造を廃して選色のまとまりを短くする。 */
export default function RibbonSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="ribbon-swatch-color" />;
}
