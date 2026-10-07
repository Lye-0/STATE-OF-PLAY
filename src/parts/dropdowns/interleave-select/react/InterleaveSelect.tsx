'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 見出しから連続する交互の差込面で候補を収納。 */
export default function InterleaveSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-interleave-select ${className}`}/>;
}
