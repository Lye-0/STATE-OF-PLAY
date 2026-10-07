'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 台帳の欄外番号を固定し、選択した行に横罫が通る。 */
export default function BrassLedgerSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-brass-ledger-select ${className}`}/>;
}
