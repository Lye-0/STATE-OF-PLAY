'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 説明を主役にして、見出しと小さな注記を左右の余白へ整理する。 */
export default function MarginaliaSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-marginalia-select ${className}`}/>;
}
