'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as ExplainedActionContextProps };
/** 操作名の下に説明を読み、対象と結果を確認しながら選べるメニュー。 */
export default function ExplainedActionContext(props:ContextProps) {
 return <ContextView {...props} skin="explained-action-context" />;
}
