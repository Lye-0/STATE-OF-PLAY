'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as LinearLabColorProps };
/** 三本の測定レーンで色を調整するカラーピッカー。横長の色面、細い指標、枠付きの実数値を同じ軸方向にまとめる。 */
export default function LinearLabColor(props: ColorProps) {
  return <ColorView {...props} skin="linear-lab-color" />;
}
