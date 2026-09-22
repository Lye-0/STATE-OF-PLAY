'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 紙の上に置かれた顔料。色見本と配合番号まで揃えたパレット。 */
export default function AtelierSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-atelier-select ${className}`}/>;
}
