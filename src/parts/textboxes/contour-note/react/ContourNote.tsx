'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 地形を描く細い線。深い緑の面へ、思考の輪郭を残す。 */
export default function ContourNote({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? true} type={props.type ?? 'text'} clearable={props.clearable ?? false} showCount={props.showCount ?? true} autoGrow={props.autoGrow ?? true} className={`sop-contour-note ${className}`}/>;
}
