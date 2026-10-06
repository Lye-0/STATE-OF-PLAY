'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as PetrolLabelContextProps };
/** 操作の印を大きく取り、項目の文字と余白を独立させる。 */
export default function PetrolLabelContext(props:ContextProps) {
 return <ContextView {...props} skin="petrol-label-context" />;
}
