'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as FoldedSwatchColorProps };
/** 折り返した色見本を開く。 */
export default function FoldedSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="folded-swatch-color" />;
}
