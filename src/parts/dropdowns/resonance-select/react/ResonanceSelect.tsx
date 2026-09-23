'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 落ち着いたグラファイトと細い水平線。選択面が短く滑り、浅い反射と影だけで操作の手応えを伝える。 */
export default function ResonanceSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={true} showHints={false} {...props} className={`sop-select-sculpted sop-resonance-select ${className}`}/>;
}
