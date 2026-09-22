'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 綴じたページの奥行き。赤いマージン線が、文章のはじまりを整える。 */
export default function FolioNote({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? true} type={props.type ?? 'text'} clearable={props.clearable ?? false} showCount={props.showCount ?? true} autoGrow={props.autoGrow ?? true} className={`sop-folio-note ${className}`}/>;
}
