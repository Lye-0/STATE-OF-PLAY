'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as RibbonSwatchColorProps };
/** 色見本の帯を上端に置く。 */
export default function RibbonSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="ribbon-swatch-color" />;
}
