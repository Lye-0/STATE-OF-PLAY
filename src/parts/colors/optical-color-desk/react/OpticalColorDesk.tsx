'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as OpticalColorDeskProps };
/** 光学機器の独立した色窓。 */
export default function OpticalColorDesk(props: ColorProps) {
  return <ColorView {...props} skin="optical-color-desk" />;
}
