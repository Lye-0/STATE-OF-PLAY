'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ColorBookSpreadProps };
/** 色見本帳の綴じ目と大きな面。 */
export default function ColorBookSpread(props: ColorProps) {
  return <ColorView {...props} skin="color-book-spread" />;
}
