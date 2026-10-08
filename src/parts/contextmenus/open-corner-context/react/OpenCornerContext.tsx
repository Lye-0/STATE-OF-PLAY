'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as OpenCornerContextProps };
/** 四隅で示す書類の操作領域。大きい装飾面を外し、メニューの名称とキーに視線を集める。 */
export default function OpenCornerContext(props:ContextProps) {
 return <ContextView {...props} skin="open-corner-context" />;
}
