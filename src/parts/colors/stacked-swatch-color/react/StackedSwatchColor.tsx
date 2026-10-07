'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as StackedSwatchColorProps };
/** 色票を重ねた大きな調色面。 */
export default function StackedSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="stacked-swatch-color" />;
}
