'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ColorBookSpreadProps };
/** 見開きの色帳。左に色面、右に調整軸を組み、綴じ目を跨がず操作できる構成に。 */
export default function ColorBookSpread(props: ColorProps) {
  return <ColorView {...props} skin="color-book-spread" />;
}
