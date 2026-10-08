'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 四隅の短い罫書き端で編集範囲を示す。長い側面と上下の線を省き、入力時は隅の端だけが1px締まる。淡い一面へ読む文字を固定し、フォーカスを角の外へ一本だけ置く。 */
export default function CornerScribeField({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-corner-scribe-field ${className}`}/>;
}
