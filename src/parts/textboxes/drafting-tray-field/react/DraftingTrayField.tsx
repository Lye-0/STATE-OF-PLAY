'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 底を斜めの曲率で受ける薄い製図トレー。読む面と両端4pxの切断面を分け、下の厚い縁と内影を省く。フォーカスは同じ外周の一本へ置き換え、入力の幅と位置を保つ。 */
export default function DraftingTrayField({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-drafting-tray-field ${className}`}/>;
}
