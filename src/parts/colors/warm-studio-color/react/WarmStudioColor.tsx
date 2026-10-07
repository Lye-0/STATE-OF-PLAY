'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as WarmStudioColorProps };
/** 制作ツールに置ける穏やかな色選択。 */
export default function WarmStudioColor(props: ColorProps) {
  return <ColorView {...props} skin="warm-studio-color" />;
}
