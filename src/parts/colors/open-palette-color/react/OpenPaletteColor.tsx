'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as OpenPaletteColorProps };
/** 開いたパレット。フレームの面積を抑え、色面・値・保存色を一つの白い作業面に整理。 */
export default function OpenPaletteColor(props: ColorProps) {
  return <ColorView {...props} skin="open-palette-color" />;
}
