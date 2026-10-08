'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** レシートの打刻行。本文の行は固定し、送り穴と赤い開始点が入力中の境界を示す。 */
export default function PorcelainLipInput({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-porcelain-lip-input ${className}`}/>;
}
