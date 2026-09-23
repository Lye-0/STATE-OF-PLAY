'use client';
import React from 'react';
import {ResponsiveFieldView} from '../../../../shared/responsive-field-view';
import type {TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 検索面は静止したまま、二つの軌道がフォーカスへ整列する。 */
export default function OrbitSearch({className='',...props}:TextFieldProps){
 return <ResponsiveFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'search'} clearable={props.clearable ?? true} showCount={props.showCount ?? true} autoGrow={props.autoGrow ?? false} className={`sop-orbit-search sop-responsive-field ${className}`}/>;
}
