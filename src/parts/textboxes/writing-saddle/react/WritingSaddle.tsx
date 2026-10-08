'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 丸い両端が書く平面を受ける陶器のサドル。端の広い支持面と中央の平面を分け、周囲の二重線を省く。入力とフォーカスの輪郭は動かさず、落ち着いた淡い釉薬でまとめる。 */
export default function WritingSaddle({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-writing-saddle ${className}`}/>;
}
