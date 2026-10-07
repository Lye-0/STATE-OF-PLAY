'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 見出しの折り目が本文リストへつながる扇状の余白。 */
export default function FoldingCaptionSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-folding-caption-select ${className}`}/>;
}
