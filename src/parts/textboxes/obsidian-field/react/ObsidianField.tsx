'use client';
import React from 'react';
import {ResponsiveFieldView} from '../../../../shared/responsive-field-view';
import type {TextFieldProps} from '../../../../shared/text-field-view';
import '../styles.css';
export type {TextFieldProps} from '../../../../shared/text-field-view';
/** 黒い二つの面が離れ、入力に合わせて光の切れ目が呼吸する。 */
export default function ObsidianField({className='',...props}:TextFieldProps){
 return <ResponsiveFieldView {...props} multiline={props.multiline ?? false} type={props.type ?? 'text'} clearable={props.clearable ?? true} showCount={props.showCount ?? true} autoGrow={props.autoGrow ?? false} className={`sop-obsidian-field sop-responsive-field ${className}`}/>;
}
