'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 右の滑車を通した糸で、書くプレートと小さい釣合い錘を結ぶ。二つの吊り糸を上の一本の糸へ接続し、入力時は錘だけが5px上がる。滑車の上と右の接線を糸が通り、文字面は動かさない。 */
export default function CounterweightField({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-counterweight-field ${className}`}/>;
}
