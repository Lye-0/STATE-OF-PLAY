'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as TextileDyeColorProps };
/** 染料の面と織布の試料欄を分ける。 */
export default function TextileDyeColor(props: ColorProps) {
  return <ColorView {...props} skin="textile-dye-color" />;
}
