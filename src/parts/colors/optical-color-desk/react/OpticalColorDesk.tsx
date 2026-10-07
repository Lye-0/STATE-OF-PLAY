'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as OpticalColorDeskProps };
/** 光学窓を囲む円環で色相を読む。 */
export default function OpticalColorDesk(props: ColorProps) {
  return <ColorView {...props} skin="optical-color-desk" />;
}
