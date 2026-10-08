'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 配達された一枚の確認書。送り状の見出し、確認本文、署名にあたる主操作を明確な三段で組む。 */
export default function DispatchSheetDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-dispatch-sheet-dialog ${className}`}/>;}
