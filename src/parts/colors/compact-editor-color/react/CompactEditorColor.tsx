'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as CompactEditorColorProps };
/** 編集画面向けの小さな色選択。 */
export default function CompactEditorColor(props: ColorProps) {
  return <ColorView {...props} skin="compact-editor-color" />;
}
