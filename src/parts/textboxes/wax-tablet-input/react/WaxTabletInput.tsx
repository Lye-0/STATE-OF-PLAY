'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 薄い木の縁へ落ち着いた赤褐色の蝋を収めた書字板。下端の小さな蝋の丸みと一方向の光で柔らかさを示す。 */
export default function WaxTabletInput({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-wax-tablet-input ${className}`}/>;
}
