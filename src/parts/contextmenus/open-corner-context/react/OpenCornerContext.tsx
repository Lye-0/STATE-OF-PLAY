'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as OpenCornerContextProps };
/** 開いた余白と見出し横の暖かい面を保つ。孤立して長かった左線を96pxで止め、上の40pxの辺と一つの開いた角にする。通常行を囲わず、見出し・選択・読む余白の順に視線を整える。 */
export default function OpenCornerContext(props:ContextProps) {
 return <ContextView {...props} skin="open-corner-context" />;
}
