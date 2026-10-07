'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as LinearLabColorProps };
/** 計測器の横長い色面と数値。 */
export default function LinearLabColor(props: ColorProps) {
  return <ColorView {...props} skin="linear-lab-color" />;
}
