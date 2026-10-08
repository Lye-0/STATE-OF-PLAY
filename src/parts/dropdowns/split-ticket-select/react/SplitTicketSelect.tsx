'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 非対称の石の凹みへ候補を収める選択棚。行の下に磨いた切断面を露出し、外周を三段に削る。選択の刻みは左の凹みへ置き、文字面を前後に動かさない。 */
export default function SplitTicketSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-split-ticket-select ${className}`}/>;
}
