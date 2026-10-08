'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 左の二つの切込みへ一本のリボンを通した書き込み札。切込み間の折り返しは固定し、下から出た燕尾の端だけを入力時に張る。文字はリボンの隣の独立した平面へ置く。 */
export default function RibbonSlotEntry({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-ribbon-slot-entry ${className}`}/>;
}
