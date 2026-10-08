'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 石の凹みに選択状態をはめる。展開面は凹みを三段の棚として構成し、選択面が前へ出る。 */
export default function SplitTicketSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-split-ticket-select ${className}`}/>;
}
