'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 非対称に丸めた琺瑯の書き込み溝。上端の浅い内影と一つの外周で材質を示し、下端の二重線を省く。入力中は同じ輪郭の外に一本のフォーカスだけを置き、文字の位置を保つ。 */
export default function EnamelTroughField({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-enamel-trough-field ${className}`}/>;
}
