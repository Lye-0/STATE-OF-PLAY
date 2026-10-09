'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as IndexPocketContextProps };
/** 索引紙を浅いポケットに差し込む操作面。紙の上端と前側の口を分け、中央の切欠きから紙が見える関係を作る。 */
export default function IndexPocketContext(props:ContextProps) {
 return <ContextView {...props} skin="index-pocket-context" />;
}
