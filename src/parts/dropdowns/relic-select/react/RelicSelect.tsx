'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 落ち着いた象牙色の紙と余白。候補に合わせて明るい面と影が移動し、開くと面が縦にほどける。 */
export default function RelicSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={true} showHints={false} {...props} className={`sop-select-sculpted sop-relic-select ${className}`}/>;
}
