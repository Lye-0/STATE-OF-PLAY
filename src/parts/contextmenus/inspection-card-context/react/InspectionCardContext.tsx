'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as InspectionCardContextProps };
/** 検査対象と操作の小窓。書類は固定した検品面へ置き、操作メニューは短い確認行として表示。 */
export default function InspectionCardContext(props:ContextProps) {
 return <ContextView {...props} skin="inspection-card-context" />;
}
