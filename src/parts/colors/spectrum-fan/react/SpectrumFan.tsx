'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as SpectrumFanProps };
/** 扇状に並ぶ色面と、選んだ色相につながる小さな調整窓。 */
export default function SpectrumFan(props: ColorProps) {
  return <ColorView {...props} skin="spectrum-fan" />;
}
