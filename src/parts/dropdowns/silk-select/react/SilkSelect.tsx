'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 柔らかな灰紫の面。候補を移る一枚の背景に、折れた布の明暗が走る。開くと面がほどける。 */
export default function SilkSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={false} showHints={false} {...props} className={`sop-select-sculpted sop-silk-select ${className}`}/>;
}
