'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 低いコントラストの面と、読みやすい文字。長い入力にも落ち着きを。 */
export default function QuietNote({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? true} type={props.type ?? 'text'} clearable={props.clearable ?? false} showCount={props.showCount ?? true} autoGrow={props.autoGrow ?? true} className={`sop-quiet-note ${className}`}/>;
}
