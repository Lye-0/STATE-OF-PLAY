'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as FoldedSwatchColorProps };
/** 折った色見本の面と署名欄。 */
export default function FoldedSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="folded-swatch-color" />;
}
