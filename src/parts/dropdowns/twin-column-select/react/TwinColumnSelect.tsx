'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** レシートの本文と、切取り線で接続した独立の打刻半券を組む選択票。端の二つの切欠きが接合を示し、確定印は半券の中へ押す。選択後も切取り線と本文の列を維持する。 */
export default function TwinColumnSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-twin-column-select ${className}`}/>;
}
