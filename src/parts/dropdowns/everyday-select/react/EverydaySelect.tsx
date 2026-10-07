'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 読みやすい二行と広いクリック領域を保つ、日常のフォーム用選択。 */
export default function EverydaySelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-everyday-select ${className}`}/>;
}
