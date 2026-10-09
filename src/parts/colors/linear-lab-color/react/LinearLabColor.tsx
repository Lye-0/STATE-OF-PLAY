'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as LinearLabColorProps };
/** 色面と数値を分離した、線形のカラー実験台。128pxの横長SV、全幅64pxの三軸、56pxの保存色を同じ左の基準線へ揃える。ラベル・実値・操作の序列を線と余白で示し、細かい偽目盛を追加しない。狭幅でもHEXの全桁と44pxのnative操作を維持し、科学値はRTLでもLTRで読む。 */
export default function LinearLabColor(props: ColorProps) {
  return <ColorView {...props} skin="linear-lab-color" />;
}
