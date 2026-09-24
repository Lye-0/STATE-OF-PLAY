'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as SwatchDeskProps };
/** 重ねた紙の色見本を選び、数値で追い込める小さなデスク。 */
export default function SwatchDesk(props: ColorProps) {
  return <ColorView {...props} skin="swatch-desk" />;
}
