'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PigmentCabinetProps };
/** 顔料を収める引き出しの色選択。 */
export default function PigmentCabinet(props: ColorProps) {
  return <ColorView {...props} skin="pigment-cabinet" />;
}
