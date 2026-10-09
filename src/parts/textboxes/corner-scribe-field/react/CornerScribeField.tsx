'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** L字の罫書き定規へ、切欠きのある筆記面を合わせる。縦横の目盛りを一つの角で接続し、実際の入力を明るい面へ固定する。 */
export default function CornerScribeField({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-corner-scribe-field ${className}`}/>;
}
