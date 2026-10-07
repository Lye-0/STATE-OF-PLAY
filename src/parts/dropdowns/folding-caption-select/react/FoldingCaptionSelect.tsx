'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** キャプションの下端だけを折り返し、開いた一覧へ線をつなぐ。 */
export default function FoldingCaptionSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-folding-caption-select ${className}`}/>;
}
