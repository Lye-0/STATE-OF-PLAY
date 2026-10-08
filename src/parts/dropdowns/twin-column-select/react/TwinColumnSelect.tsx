'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** レシートの本文と選択欄を一つの列として組む。選択した候補の横に打刻印を置く。 */
export default function TwinColumnSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-twin-column-select ${className}`}/>;
}
