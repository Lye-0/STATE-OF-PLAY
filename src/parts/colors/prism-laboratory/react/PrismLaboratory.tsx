'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PrismLaboratoryProps };
/** 色面を囲む透明なファセットと、細密な座標線。 */
export default function PrismLaboratory(props: ColorProps) {
  return <ColorView {...props} skin="prism-laboratory" />;
}
