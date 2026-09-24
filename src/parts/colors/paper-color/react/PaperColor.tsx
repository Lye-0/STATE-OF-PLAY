'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PaperColorProps };
/** 明るい画面のための、素直なカラーピッカー。 */
export default function PaperColor(props: ColorProps) {
  return <ColorView {...props} skin="paper-color" />;
}
