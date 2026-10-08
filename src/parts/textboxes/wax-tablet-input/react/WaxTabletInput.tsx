'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 四片を留め継ぎした木の掘込みへ、蝋を一枚として流し込む。右下だけの丸い注ぎ溜まりを同じ掘込みへ接続し、蝋の端と木の切断面を輪郭で分ける。左の筒を省き、入力時は上の掘り口の陰だけを深める。 */
export default function WaxTabletInput({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-wax-tablet-input ${className}`}/>;
}
