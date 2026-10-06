'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as GradientDeskProps };
/** 大きな彩度面と、二本の独立した読取り帯を持つ横長の色机。 */
export default function GradientDesk(props: ColorProps) {
  return <ColorView {...props} skin="gradient-desk" />;
}
