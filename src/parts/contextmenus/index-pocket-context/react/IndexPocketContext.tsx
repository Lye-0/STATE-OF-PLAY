'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as IndexPocketContextProps };
/** 索引ポケットから取り出す操作札。 */
export default function IndexPocketContext(props:ContextProps) {
 return <ContextView {...props} skin="index-pocket-context" />;
}
