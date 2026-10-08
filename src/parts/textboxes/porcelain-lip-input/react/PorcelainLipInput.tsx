'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 非対称の磁器の口縁を、一つの輪郭と上の3pxの浅い返しで示す。下の細線を重ねず、釉薬の面を文字の下へ静かに保つ。入力時のフォーカスは同じ外周へ置き換え、文字とクリアの幅は変えない。 */
export default function PorcelainLipInput({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-porcelain-lip-input ${className}`}/>;
}
