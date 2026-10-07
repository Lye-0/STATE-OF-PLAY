'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 切符の控えと本文を分けるように、番号の小室と候補を区切る。 */
export default function SplitTicketSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-split-ticket-select ${className}`}/>;
}
