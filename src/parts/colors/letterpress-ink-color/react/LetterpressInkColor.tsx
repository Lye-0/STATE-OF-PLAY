'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as LetterpressInkColorProps };
/** 活字の色指定とインク面。 */
export default function LetterpressInkColor(props: ColorProps) {
  return <ColorView {...props} skin="letterpress-ink-color" />;
}
