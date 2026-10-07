'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PrinterProofColorProps };
/** 印刷校正の色面と基準値を分離。 */
export default function PrinterProofColor(props: ColorProps) {
  return <ColorView {...props} skin="printer-proof-color" />;
}
