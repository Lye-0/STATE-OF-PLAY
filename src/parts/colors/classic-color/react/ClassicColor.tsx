'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ClassicColorProps };
/** 色相・彩度・明度を調整する基本形。 */
export default function ClassicColor(props: ColorProps) {
  return <ColorView {...props} skin="classic-color" />;
}
