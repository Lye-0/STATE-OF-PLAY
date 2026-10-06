'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PigmentPipesProps };
/** 色相・彩度・明度を三本の立てた調整軸として並べる。 */
export default function PigmentPipes(props: ColorProps) {
  return <ColorView {...props} skin="pigment-pipes" />;
}
