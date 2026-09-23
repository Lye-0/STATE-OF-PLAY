'use client';
import React from 'react';
import {ResponsiveFieldView} from '../../../../shared/responsive-field-view';
import type {TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 等高線の層がフォーカスで広がり、入力の余韻だけが伝わる。 */
export default function ContourNote({className='',...props}:TextFieldProps){
 return <ResponsiveFieldView {...props} multiline={props.multiline ?? true} type={props.type ?? 'text'} clearable={props.clearable ?? false} showCount={props.showCount ?? true} autoGrow={props.autoGrow ?? true} className={`sop-contour-note sop-responsive-field ${className}`}/>;
}
