'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as RgbControlBoardProps };
/** 三つのRGBチャンネルを大きな操作行に分け、混色の値を明確に読む。 */
export default function RgbControlBoard(props: ColorProps) {
  return <ColorView {...props} skin="rgb-control-board" />;
}
