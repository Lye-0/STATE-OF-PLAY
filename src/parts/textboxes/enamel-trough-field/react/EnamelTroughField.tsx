'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 青灰の琺瑯の外周と凹んだ明るい書き込み溝。上縁の光と下縁の断面を分け、文字は静かな中央の面へ固定する。 */
export default function EnamelTroughField({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-enamel-trough-field ${className}`}/>;
}
