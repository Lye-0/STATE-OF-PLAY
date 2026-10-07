'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 左右二列を廃止し、見出しから候補へ視線が一方向に流れる列。 */
export default function TwinColumnSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-twin-column-select ${className}`}/>;
}
