'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 夜色の平たい面と読みやすいセリフ体。候補の背後へ柔らかな明暗が移り、細い線がその行を引き立てる。 */
export default function NocturneSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={false} showHints={false} {...props} className={`sop-select-sculpted sop-nocturne-select ${className}`}/>;
}
