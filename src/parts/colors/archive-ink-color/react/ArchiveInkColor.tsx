'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ArchiveInkColorProps };
/** 色を保存する資料票。HEX入力を上部へ移し、保存色と現在色の照合を先に行える構成。 */
export default function ArchiveInkColor(props: ColorProps) {
  return <ColorView {...props} skin="archive-ink-color" />;
}
