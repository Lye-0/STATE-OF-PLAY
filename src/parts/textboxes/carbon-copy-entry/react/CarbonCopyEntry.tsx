'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 白い原紙、紺のカーボン、薄黄の控えを下端に露出する連続伝票。左の送り孔を同じ綴じ端へ揃え、入力時はカーボンの端だけが少し現れる。値は一つのnative入力に残し、複写した値を装飾へ描かない。 */
export default function CarbonCopyEntry({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-carbon-copy-entry ${className}`}/>;
}
