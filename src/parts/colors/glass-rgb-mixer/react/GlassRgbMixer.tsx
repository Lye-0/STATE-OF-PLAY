'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as GlassRgbMixerProps };
/** 赤・緑・青の三本の光路から、透明な色のレンズを作る。 */
export default function GlassRgbMixer(props: ColorProps) {
  return <ColorView {...props} skin="glass-rgb-mixer" />;
}
