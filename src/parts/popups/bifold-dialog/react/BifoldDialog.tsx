'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 中央の縦綴じをもつ二つ折りの紙に、説明と操作を載せる。 Content, state and actions belong to the consumer. */
export default function BifoldDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-bifold-dialog ${className}`}/>;}
