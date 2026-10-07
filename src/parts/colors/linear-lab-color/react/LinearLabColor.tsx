'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as LinearLabColorProps };
/** 細い実験用の測定レールと色面。 */
export default function LinearLabColor(props: ColorProps) {
  return <ColorView {...props} skin="linear-lab-color" />;
}
