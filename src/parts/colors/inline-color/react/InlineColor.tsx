'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as InlineColorProps };
/** 必要な数値と色相を、小さな領域へ。 */
export default function InlineColor(props: ColorProps) {
  return <ColorView {...props} skin="inline-color" />;
}
