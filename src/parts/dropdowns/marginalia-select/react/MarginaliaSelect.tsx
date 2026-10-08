'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 縫い目のある一枚のカバーを開き、選択した行を布のタブとして留める。 */
export default function MarginaliaSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-marginalia-select ${className}`}/>;
}
