'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 横へ張り出した小さな索引をたどる、書類のような選択欄。 */
export default function ThumbIndexSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-thumb-index-select ${className}`}/>;
}
