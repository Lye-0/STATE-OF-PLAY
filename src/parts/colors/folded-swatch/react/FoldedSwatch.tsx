'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as FoldedSwatchProps };
/** 同じ色を受ける折り返し面と、影のある紙のサンプル。 */
export default function FoldedSwatch(props: ColorProps) {
  return <ColorView {...props} skin="folded-swatch" />;
}
