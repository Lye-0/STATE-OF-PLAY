'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as TextileDyeColorProps };
/** 染料の見本布と調色軸。色面の周囲にだけ織りの縁を置き、選んだ色を下の大きい布片へ。 */
export default function TextileDyeColor(props: ColorProps) {
  return <ColorView {...props} skin="textile-dye-color" />;
}
