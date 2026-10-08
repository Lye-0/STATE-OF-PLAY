'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 両端の鋲へ吊るした一本の基線と、中央の小さな錘。入力を始めると基線のたわみと錘が同じ量だけ上がる。線は文字の下に置き、文字と編集窓の座標は変えない。 */
export default function SuspendedBaselineField({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-suspended-baseline-field ${className}`}/>;
}
