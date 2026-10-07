'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 指掛かりのある目録を展開し、各候補に大きな余白を持たせる。 */
export default function ThumbIndexSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-thumb-index-select ${className}`}/>;
}
