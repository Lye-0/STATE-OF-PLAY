'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as LinearLabColorProps };
/** 横長の色面と三本の計測軸。数値を右へ揃え、色を面積と値の両方で確かめる。 */
export default function LinearLabColor(props: ColorProps) {
  return <ColorView {...props} skin="linear-lab-color" />;
}
