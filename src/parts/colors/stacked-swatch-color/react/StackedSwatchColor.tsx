'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as StackedSwatchColorProps };
/** 積んだ見本カードの最上面を編集。色面の下に大きい保存色を一枚ずつ並べる。 */
export default function StackedSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="stacked-swatch-color" />;
}
