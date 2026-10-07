'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PlainPaletteColorProps };
/** 汎用的な色面と色コード入力。 */
export default function PlainPaletteColor(props: ColorProps) {
  return <ColorView {...props} skin="plain-palette-color" />;
}
