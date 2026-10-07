'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 候補を二列のカードへ分け、図録のように一覧して選べる。 */
export default function TwinColumnSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-twin-column-select ${className}`}/>;
}
