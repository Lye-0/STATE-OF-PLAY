'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PrinterProofColorProps };
/** 印刷の校正台。色見本を大きく見せ、RGBの数値調整を主にした確認構成へ。 */
export default function PrinterProofColor(props: ColorProps) {
  return <ColorView {...props} skin="printer-proof-color" />;
}
