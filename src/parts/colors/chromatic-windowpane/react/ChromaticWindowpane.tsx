'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ChromaticWindowpaneProps };
/** 細い桟で分けた色面と、下の二段の読取り軸を持つ窓。 */
export default function ChromaticWindowpane(props: ColorProps) {
  return <ColorView {...props} skin="chromatic-windowpane" />;
}
