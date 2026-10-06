'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as SpectralRegisterProps };
/** 色相の横帯と縦の数値表を、記録用の色面にまとめる。 */
export default function SpectralRegister(props: ColorProps) {
  return <ColorView {...props} skin="spectral-register" />;
}
