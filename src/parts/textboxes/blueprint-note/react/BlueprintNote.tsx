'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 細かなグリッドと製図の角。思考を整える、青い作業面。 */
export default function BlueprintNote({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? true} type={props.type ?? 'text'} clearable={props.clearable ?? false} showCount={props.showCount ?? true} autoGrow={props.autoGrow ?? true} className={`sop-blueprint-note ${className}`}/>;
}
