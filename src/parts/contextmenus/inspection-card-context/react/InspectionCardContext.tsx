'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as InspectionCardContextProps };
/** 検査カードに操作の読取欄を置く。 */
export default function InspectionCardContext(props:ContextProps) {
 return <ContextView {...props} skin="inspection-card-context" />;
}
