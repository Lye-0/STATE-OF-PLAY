'use client';
import React from 'react';
import {TextFieldView,type TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 真鍮の銘板へ削った浅い記入窓。角を斜めに落とした板を左右の溝付きネジで固定し、上の刻印ラベルと書き換える文字を分ける。窓の上だけに浅い削り跡を置き、読み面へ光の模様を通さない。 */
export default function EngravedLabelField({className='',...props}:TextFieldProps){
 return <TextFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? false} autoGrow={props.autoGrow ?? false} className={`sop-engraved-label-field ${className}`}/>;
}
