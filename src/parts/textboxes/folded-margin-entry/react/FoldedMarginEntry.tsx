'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 同じ一枚の紙の左端を23px返した編集窓。上と下の三角の端を縦の折り面へ隙間なくつなぎ、読む紙の左端と同じ位置へ収める。紙面から離れた飾り三角を省き、端の折り線だけへ材質を置く。 */
export default function FoldedMarginEntry({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-folded-margin-entry ${className}`}/>;
}
