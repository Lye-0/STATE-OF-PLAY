'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as TextileDyeColorProps };
/** 染色用の布端を思わせる枠。 */
export default function TextileDyeColor(props: ColorProps) {
  return <ColorView {...props} skin="textile-dye-color" />;
}
