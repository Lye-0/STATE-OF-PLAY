'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as StonePigmentColorProps };
/** 石の台と小さな試し塗り。 */
export default function StonePigmentColor(props: ColorProps) {
  return <ColorView {...props} skin="stone-pigment-color" />;
}
