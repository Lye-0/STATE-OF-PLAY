'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 明るい平面と整った情報の並び。候補を移る薄い帯と下線が、選ぶ位置を簡潔に示す。 */
export default function TransitSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={true} showHints={false} {...props} className={`sop-select-sculpted sop-transit-select ${className}`}/>;
}
