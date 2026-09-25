'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as LgcContextmenusLensProps };
/** 対象だけに反応する、キーボードでも使える操作メニュー。 */
export default function LgcContextmenusLens(props:ContextProps) {
 return <ContextView {...props} skin="lgc-contextmenus-lens" className={`lgc-root ${props.className??''}`} />;
}
