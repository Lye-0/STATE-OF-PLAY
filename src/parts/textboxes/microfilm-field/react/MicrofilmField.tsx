'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 上下の送り孔を持つフィルムへ、淡い一つの読取り窓を切り出す入力。フォーカス時は孔の列だけが短く進み、送りの位相を示す。フィルムの縁は文字を囲む固定した窓の外へ置く。 */
export default function MicrofilmField({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-microfilm-field ${className}`}/>;
}
