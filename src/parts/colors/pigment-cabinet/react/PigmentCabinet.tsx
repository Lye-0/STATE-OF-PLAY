'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PigmentCabinetProps };
/** 顔料の引き出し。色面を上段、保存色を引き出し状の横列へ分け、選んだ色を大きい見本で確認。 */
export default function PigmentCabinet(props: ColorProps) {
  return <ColorView {...props} skin="pigment-cabinet" />;
}
