'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 温かい白と穏やかな枠で、説明文のあるフォームへ馴染ませる。 */
export default function WarmFormSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-warm-form-select ${className}`}/>;
}
