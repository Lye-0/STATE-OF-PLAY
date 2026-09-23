'use client';
import React from 'react';
import {ResponsiveFieldView} from '../../../../shared/responsive-field-view';
import type {TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 結晶の縁が開き、白い入力面に分光の余韻が走る。 */
export default function PrismField({className='',...props}:TextFieldProps){
 return <ResponsiveFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? true} autoGrow={props.autoGrow ?? false} className={`sop-prism-field sop-responsive-field ${className}`}/>;
}
