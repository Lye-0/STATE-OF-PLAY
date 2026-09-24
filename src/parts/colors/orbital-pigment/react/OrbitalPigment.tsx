'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as OrbitalPigmentProps };
/** 輪をたどって色相を選び、明るさを下の光路で整える。 */
export default function OrbitalPigment(props: ColorProps) {
  return <ColorView {...props} skin="orbital-pigment" />;
}
