'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as OpticalColorDeskProps };
/** 光学ディスクと色面を上下に分ける。色相環の中心を確認色に使い、編集面を別に保つ。 */
export default function OpticalColorDesk(props: ColorProps) {
  return <ColorView {...props} skin="optical-color-desk" />;
}
