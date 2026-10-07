'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as OpenPaletteColorProps };
/** 操作面を余白と線で分ける。 */
export default function OpenPaletteColor(props: ColorProps) {
  return <ColorView {...props} skin="open-palette-color" />;
}
