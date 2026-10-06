'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ChromaScaffoldProps };
/** 大きな色の面を左に、読取り軸を右に分けた小さな色の作業台。 */
export default function ChromaScaffold(props: ColorProps) {
  return <ColorView {...props} skin="chroma-scaffold" />;
}
