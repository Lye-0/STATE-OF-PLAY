'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PigmentReservoirProps };
/** 大きな色の溜まりと、滴のように切り取られた調整面。 */
export default function PigmentReservoir(props: ColorProps) {
  return <ColorView {...props} skin="pigment-reservoir" />;
}
