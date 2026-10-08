'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 引き出しの面板が選択行へ接続する。候補は深い棚の中に分かれ、選択棚だけを明るくする。 */
export default function BrassLedgerSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-brass-ledger-select ${className}`}/>;
}
