'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ArchiveInkColorProps };
/** インク見本の資料枠。 */
export default function ArchiveInkColor(props: ColorProps) {
  return <ColorView {...props} skin="archive-ink-color" />;
}
