'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as TintContactSheetProps };
/** 広い色見本の列と、精密な色面を資料のように二段に分ける。 */
export default function TintContactSheet(props: ColorProps) {
  return <ColorView {...props} skin="tint-contact-sheet" />;
}
