'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as CeramicMixingColorProps };
/** 磁器の調色皿に矩形の色面を収める。 */
export default function CeramicMixingColor(props: ColorProps) {
  return <ColorView {...props} skin="ceramic-mixing-color" />;
}
