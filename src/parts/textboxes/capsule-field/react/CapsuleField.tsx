'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 光を閉じ込めたスモークガラス。目のボタンで入力内容を確認できる。 */
export default function CapsuleField({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'password'} clearable={props.clearable ?? false} showCount={props.showCount ?? true} autoGrow={props.autoGrow ?? false} className={`sop-capsule-field ${className}`}/>;
}
