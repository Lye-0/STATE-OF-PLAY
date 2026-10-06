'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as SaturationSlitProps };
/** 横に長い色の細窓と、大きなHEXの読取欄を持つ色調整器。 */
export default function SaturationSlit(props: ColorProps) {
  return <ColorView {...props} skin="saturation-slit" />;
}
