'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as InkwellMixerProps };
/** 丸いインク壺の色印と、横の大きな色面を組み合わせる。 */
export default function InkwellMixer(props: ColorProps) {
  return <ColorView {...props} skin="inkwell-mixer" />;
}
