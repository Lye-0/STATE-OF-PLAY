'use client';
import React from 'react';
import {ResponsiveFieldView} from '../../../../shared/responsive-field-view';
import type {TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 折り込まれた帯の端が、フォーカスに応じて広がる。 */
export default function RibbonField({className='',...props}:TextFieldProps){
 return <ResponsiveFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? true} autoGrow={props.autoGrow ?? false} className={`sop-ribbon-field sop-responsive-field ${className}`}/>;
}
