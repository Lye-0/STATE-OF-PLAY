'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 細い真鍮の留め線と濃淡を抑えた紙面で、候補の行を見せる。 */
export default function BrassLedgerSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-brass-ledger-select ${className}`}/>;
}
