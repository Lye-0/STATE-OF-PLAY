'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 明るい磁器の板の右端を巻いて、釉薬の縁と断面を見せる入力欄。広い平面と一つの巻き縁で琺瑯の溝とは異なる構造を作る。 */
export default function PorcelainLipInput({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-porcelain-lip-input ${className}`}/>;
}
