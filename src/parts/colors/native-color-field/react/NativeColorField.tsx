'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as NativeColorFieldProps };
/** 標準カラーピッカーと、直接入力するHEX。 */
export default function NativeColorField(props: ColorProps) {
  return <ColorView {...props} skin="native-color-field" />;
}
