'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as CeramicFileContextProps };
/** 磁器の書類トレイ。丸い縁と内側の平らな面を分け、操作は押しやすい小区画へ整える。 */
export default function CeramicFileContext(props:ContextProps) {
 return <ContextView {...props} skin="ceramic-file-context" />;
}
