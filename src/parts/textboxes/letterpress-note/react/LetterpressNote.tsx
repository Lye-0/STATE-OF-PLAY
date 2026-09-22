'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 柔らかな紙、行間に落ちる影。書き足すほどに静かに広がる。 */
export default function LetterpressNote({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? true} type={props.type ?? 'text'} clearable={props.clearable ?? false} showCount={props.showCount ?? true} autoGrow={props.autoGrow ?? true} className={`sop-letterpress-note ${className}`}/>;
}
