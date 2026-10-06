'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ColorSwatchBinderProps };
/** 色見本を綴じた帯と、小さな調色面を一つの台紙へ収める。 */
export default function ColorSwatchBinder(props: ColorProps) {
  return <ColorView {...props} skin="color-swatch-binder" />;
}
