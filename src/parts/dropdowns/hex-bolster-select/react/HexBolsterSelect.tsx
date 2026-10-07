'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 六角の支えを候補の左端に連続させた構造。 */
export default function HexBolsterSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-hex-bolster-select ${className}`}/>;
}
