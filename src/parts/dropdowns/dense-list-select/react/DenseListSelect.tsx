'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 説明と補助ラベルのコントラストを確保。 */
export default function DenseListSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-dense-list-select ${className}`}/>;
}
