'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as OpenCornerContextProps };
/** 独立した対象札と操作紙を角の受けで支えるメニュー。分類紙の間に背景が見える余白を残し、支持する三角片と紙面の段差でまとまりを示す。 */
export default function OpenCornerContext(props:ContextProps) {
 return <ContextView {...props} skin="open-corner-context" />;
}
