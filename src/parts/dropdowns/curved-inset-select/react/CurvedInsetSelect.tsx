'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 弧の背骨に候補を沿わせる、内側に文字を置いた窓。 */
export default function CurvedInsetSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-curved-inset-select ${className}`}/>;
}
