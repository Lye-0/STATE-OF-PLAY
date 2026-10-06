'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as RgbPipeStudioProps };
/** 赤・緑・青の縦の管を調整し、混ざった色を上端の印で見る。 */
export default function RgbPipeStudio(props: ColorProps) {
  return <ColorView {...props} skin="rgb-pipe-studio" />;
}
