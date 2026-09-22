'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 布見本の重なりと絹の陰影。やわらかな反射が選択を包む。 */
export default function SilkSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-silk-select ${className}`}/>;
}
