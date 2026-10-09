'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 左右の角を折り上げた支持体が、中央の書く平面を受けるサドル。底の受けだけが反応し、入力位置と文字は動かない。 */
export default function WritingSaddle({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-writing-saddle ${className}`}/>;
}
