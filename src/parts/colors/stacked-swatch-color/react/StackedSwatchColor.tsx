'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as StackedSwatchColorProps };
/** 重ねた色票の上で選択する。 */
export default function StackedSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="stacked-swatch-color" />;
}
