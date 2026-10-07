'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ArchiveInkColorProps };
/** 記録用インクの標本と値を揃える。 */
export default function ArchiveInkColor(props: ColorProps) {
  return <ColorView {...props} skin="archive-ink-color" />;
}
