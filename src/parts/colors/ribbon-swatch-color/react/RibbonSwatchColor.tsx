'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as RibbonSwatchColorProps };
/** 帯状の保存色から選び、中央の色面で調整する。薄い横帯を主役にして枠の重なりを減らす。 */
export default function RibbonSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="ribbon-swatch-color" />;
}
