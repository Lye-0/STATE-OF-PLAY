'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 光学フィルターを選ぶ、分光色と透明な切断面のメニュー。 */
export default function PrismSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-prism-select ${className}`}/>;
}
