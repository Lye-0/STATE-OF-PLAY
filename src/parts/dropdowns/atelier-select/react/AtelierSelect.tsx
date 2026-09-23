'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 生成りの紙とセリフ体。薄い紙の背景が候補へ移り、開くと一枚の紙面として広がる。 */
export default function AtelierSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={true} showHints={false} {...props} className={`sop-select-sculpted sop-atelier-select ${className}`}/>;
}
