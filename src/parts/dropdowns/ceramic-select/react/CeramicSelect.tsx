'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 磁器の縁と青い印。器を選ぶような、白くつややかなメニュー。 */
export default function CeramicSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-select-sculpted sop-ceramic-select ${className}`}/>;
}
