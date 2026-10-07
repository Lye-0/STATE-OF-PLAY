'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as CeramicMixingColorProps };
/** 絵具皿の浅い縁に色を広げる。 */
export default function CeramicMixingColor(props: ColorProps) {
  return <ColorView {...props} skin="ceramic-mixing-color" />;
}
