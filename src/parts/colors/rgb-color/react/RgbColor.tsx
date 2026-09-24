'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as RgbColorProps };
/** 赤・緑・青を個別に調整。 */
export default function RgbColor(props: ColorProps) {
  return <ColorView {...props} skin="rgb-color" />;
}
