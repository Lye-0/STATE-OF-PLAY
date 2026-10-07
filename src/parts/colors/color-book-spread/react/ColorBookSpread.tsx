'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ColorBookSpreadProps };
/** 色の見開きと細い読み取り欄。 */
export default function ColorBookSpread(props: ColorProps) {
  return <ColorView {...props} skin="color-book-spread" />;
}
