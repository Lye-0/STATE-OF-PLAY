'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 下の一本のレールへ、二つの締付け台で書くプレートを固定する。締付け台の上の顎だけを入力時に押し、縦のネジとレールの受けを接続する。読む面とクリアの座標は変えない。 */
export default function RailClampInput({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-rail-clamp-input ${className}`}/>;
}
