'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as RibbonSwatchColorProps };
/** 帯の色見本を文字の外へ固定。 */
export default function RibbonSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="ribbon-swatch-color" />;
}
