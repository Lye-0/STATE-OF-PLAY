'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 吊るす札から候補の吊り列へ。各項目の穴と紐が連続し、選択した札の支点を強調。 */
export default function RailcarSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-railcar-select ${className}`}/>;
}
