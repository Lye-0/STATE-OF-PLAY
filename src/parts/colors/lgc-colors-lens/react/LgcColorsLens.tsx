'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as LgcColorsLensProps };
/** 色相・彩度・明度を調整する基本形。 */
export default function LgcColorsLens(props: ColorProps) {
  return <ColorView {...props} skin="lgc-colors-lens" className={`lgc-root ${props.className??''}`} />;
}
