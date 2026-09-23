'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 明るい紙、細い区切り、薄い選択面。縦へ展開し、左端の線と背景が選択候補に追従する。 */
export default function ArchiveSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={true} showHints={false} {...props} className={`sop-select-sculpted sop-archive-select ${className}`}/>;
}
