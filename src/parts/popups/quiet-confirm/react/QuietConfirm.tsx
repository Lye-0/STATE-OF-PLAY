'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** キャンセルを選びやすい、落ち着いた確認画面。 Content, state and actions belong to the consumer. */
export default function QuietConfirm({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-quiet-confirm ${className}`}/>;}
