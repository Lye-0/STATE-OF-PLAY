'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 大きな索引符号を本文から分け、右へ折った青灰の紙耳を一列に揃えたカード索引。選択した紙耳を明るくし、読む列と探す列の役割を分離する。 */
export default function ShelfBaySelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-shelf-bay-select ${className}`}/>;
}
