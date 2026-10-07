'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as InspectionCardContextProps };
/** 検査カードの小さな工具メニュー。 */
export default function InspectionCardContext(props:ContextProps) {
 return <ContextView {...props} skin="inspection-card-context" />;
}
