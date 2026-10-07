'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 挟み込んだ薄い見出し帯と、交互にずれた選択行を使う索引。 */
export default function InterleaveSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-interleave-select ${className}`}/>;
}
