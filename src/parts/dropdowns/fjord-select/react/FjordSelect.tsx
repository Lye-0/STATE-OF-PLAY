'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 青灰色の明るいフィールド。半透明の薄い背景が滑り、上下の反射が面の厚みを示す。 */
export default function FjordSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={false} showHints={false} {...props} className={`sop-select-sculpted sop-fjord-select ${className}`}/>;
}
