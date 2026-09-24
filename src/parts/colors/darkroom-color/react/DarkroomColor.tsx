'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as DarkroomColorProps };
/** 暗室の光源のような色面と、細い電極状のスライダー。 */
export default function DarkroomColor(props: ColorProps) {
  return <ColorView {...props} skin="darkroom-color" />;
}
