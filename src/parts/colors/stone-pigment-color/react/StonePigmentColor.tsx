'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as StonePigmentColorProps };
/** 石の小皿の中で色相環を回す。中央の固定色面と外周の色相操作を分離する。 */
export default function StonePigmentColor(props: ColorProps) {
  return <ColorView {...props} skin="stone-pigment-color" />;
}
