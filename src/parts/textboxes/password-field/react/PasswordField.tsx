'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 入力を隠し、必要なときだけ確認する。シンプルな認証フォームに。 */
export default function PasswordField({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'password'} clearable={props.clearable ?? false} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-password-field ${className}`}/>;
}
