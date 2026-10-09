'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as OpticalColorDeskProps };
/** 色相輪の内側に彩度・明度の色面を収めた光学盤。外周で色相、中央で濃さを選び、同じ一色を下の軸と数値へ同期する。 */
export default function OpticalColorDesk(props: ColorProps) {
  return <ColorView {...props} skin="optical-color-desk" />;
}
