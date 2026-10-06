'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as CompactSplitColorProps };
/** 小さな色面と調整軸を左右に分け、設定欄で少ない高さに収める。 */
export default function CompactSplitColor(props: ColorProps) {
  return <ColorView {...props} skin="compact-split-color" />;
}
