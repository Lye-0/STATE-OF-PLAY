'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 薄い輪郭と候補行の下線だけで、情報を整然と並べる。 */
export default function OutlineRowSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-outline-row-select ${className}`}/>;
}
