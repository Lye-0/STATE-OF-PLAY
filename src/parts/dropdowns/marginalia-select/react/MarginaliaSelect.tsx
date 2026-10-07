'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 余白の注記と本項目を組版で分ける索引。 */
export default function MarginaliaSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-marginalia-select ${className}`}/>;
}
