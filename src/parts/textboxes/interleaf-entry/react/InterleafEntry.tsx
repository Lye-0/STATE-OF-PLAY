'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 左の折返しから続く、上の紙の唇と固定した下の受けへ書く紙を差す。右へ突き出す紙端が差込み口をまたぎ、上の唇だけが入力時に開く。背の平面を斜めに重ねず、綴じ端と上下の接合へ折り面を集める。 */
export default function InterleafEntry({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-interleaf-entry ${className}`}/>;
}
