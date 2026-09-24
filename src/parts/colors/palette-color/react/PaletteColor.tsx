'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PaletteColorProps };
/** よく使う色を、コンパクトな見本から。 */
export default function PaletteColor(props: ColorProps) {
  return <ColorView {...props} skin="palette-color" />;
}
