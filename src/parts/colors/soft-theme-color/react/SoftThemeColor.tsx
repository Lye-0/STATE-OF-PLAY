'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as SoftThemeColorProps };
/** テーマ色を名前と一緒に選べるカラーピッカー。小さな調整面とコード付きの候補行で、似た色でも選び直しやすくする。 */
export default function SoftThemeColor(props: ColorProps) {
  return <ColorView {...props} skin="soft-theme-color" />;
}
