'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as OpticalColorDeskProps };
/** 光学の色相輪と実色面を、別々の編集面として示す。元の上下の色相輪/色面の配置を保持し、160pxの輪と20pxの色相帯へ整理する。輪の中心は実確認色、下のSV面は実彩度/明度を編集し、同じ一つのHSV値へつなぐ。輪や文字を連続回転させず、native軸も44px高で残す。 */
export default function OpticalColorDesk(props: ColorProps) {
  return <ColorView {...props} skin="optical-color-desk" />;
}
