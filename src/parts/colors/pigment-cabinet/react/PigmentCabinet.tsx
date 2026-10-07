'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PigmentCabinetProps };
/** 顔料棚の大きい調色面と下の試料列。 */
export default function PigmentCabinet(props: ColorProps) {
  return <ColorView {...props} skin="pigment-cabinet" />;
}
