'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 段ごとの細い棚板で候補を支え、選んだ段だけを明るくする。 */
export default function ShelfBaySelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-shelf-bay-select ${className}`}/>;
}
