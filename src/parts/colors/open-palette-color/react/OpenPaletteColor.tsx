'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as OpenPaletteColorProps };
/** 囲みのない色面と下の混色レール。 */
export default function OpenPaletteColor(props: ColorProps) {
  return <ColorView {...props} skin="open-palette-color" />;
}
