'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 明るい木の引き出しを暗い棚へ収め、二本の支点を持つ細い金属の取っ手で候補を示す。選択印と取っ手の濃淡を連動し、正面の文字は固定する。 */
export default function BrassLedgerSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-brass-ledger-select ${className}`}/>;
}
