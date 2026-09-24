'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as SpectralWaveProps };
/** 色相に合わせて分光面が広がる、波形のような色の窓。 */
export default function SpectralWave(props: ColorProps) {
  return <ColorView {...props} skin="spectral-wave" />;
}
