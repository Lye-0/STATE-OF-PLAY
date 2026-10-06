'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as ShortcutRailContextProps };
/** 項目の文字とキー操作を二つの明確な列に揃えた操作メニュー。 */
export default function ShortcutRailContext(props:ContextProps) {
 return <ContextView {...props} skin="shortcut-rail-context" />;
}
