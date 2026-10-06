'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ColorPlateTrioProps };
/** 色面・スライダー・見本の三つの区画を、低い縁で仕切る。 */
export default function ColorPlateTrio(props: ColorProps) {
  return <ColorView {...props} skin="color-plate-trio" />;
}
