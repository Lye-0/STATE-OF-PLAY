'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ChromaticOrbitProps };
/** 輪に触れて色相を変え、内側で彩度と明るさを決める。 */
export default function ChromaticOrbit(props: ColorProps) {
  return <ColorView {...props} skin="chromatic-orbit" />;
}
