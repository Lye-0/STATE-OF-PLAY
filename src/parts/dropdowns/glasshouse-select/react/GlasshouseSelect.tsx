'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 明るいセージのガラス面。白い反射が候補へ滑り、背景の低彩度の光がポインターに応える。 */
export default function GlasshouseSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={false} showHints={false} {...props} className={`sop-select-sculpted sop-glasshouse-select ${className}`}/>;
}
