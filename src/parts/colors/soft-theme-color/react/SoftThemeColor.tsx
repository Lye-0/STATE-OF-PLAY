'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as SoftThemeColorProps };
/** テーマ設定に馴染む柔らかな面。 */
export default function SoftThemeColor(props: ColorProps) {
  return <ColorView {...props} skin="soft-theme-color" />;
}
