'use client';
import React from 'react';
import {ResponsiveFieldView} from '../../../../shared/responsive-field-view';
import type {TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** フォーカスで水の膜が持ち上がり、入力に小さな波が返る。 */
export default function CapillaryField({className='',...props}:TextFieldProps){
 return <ResponsiveFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? true} autoGrow={props.autoGrow ?? false} className={`sop-capillary-field sop-responsive-field ${className}`}/>;
}
