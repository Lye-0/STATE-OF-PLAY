'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PrinterProofColorProps };
/** 校正刷りの枠とRGB値。 */
export default function PrinterProofColor(props: ColorProps) {
  return <ColorView {...props} skin="printer-proof-color" />;
}
