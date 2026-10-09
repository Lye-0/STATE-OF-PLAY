'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 傾斜した製図トレーへ明るい紙面を置き、下の押さえ板で受ける。文字と入力位置を固定し、底の受けだけがフォーカスへ反応する。 */
export default function DraftingTrayField({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-drafting-tray-field ${className}`}/>;
}
