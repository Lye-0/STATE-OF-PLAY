'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as CeramicMixingColorProps };
/** 混色皿の中央に色相環と色面を配置。円周で色相、内側の正方形で彩度と明度を選ぶ。 */
export default function CeramicMixingColor(props: ColorProps) {
  return <ColorView {...props} skin="ceramic-mixing-color" />;
}
