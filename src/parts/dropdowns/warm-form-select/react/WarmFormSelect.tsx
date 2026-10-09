'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 暖かい面の小さな活字ラベルと、細い区切りの下に置いた選択値。説明と操作の重みを分ける。 */
export default function WarmFormSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-warm-form-select ${className}`}/>;
}
