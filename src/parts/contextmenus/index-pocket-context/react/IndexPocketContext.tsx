'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as IndexPocketContextProps };
/** 対象名と操作を二つの区画に分ける。 */
export default function IndexPocketContext(props:ContextProps) {
 return <ContextView {...props} skin="index-pocket-context" />;
}
