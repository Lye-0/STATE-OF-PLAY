'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as FoldedSwatchColorProps };
/** 折り畳む色見本帳。色面を一枚の表紙へし、下の見本を扇状ではなく読める票の列に揃える。 */
export default function FoldedSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="folded-swatch-color" />;
}
