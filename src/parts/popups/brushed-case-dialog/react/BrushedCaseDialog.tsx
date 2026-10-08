'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 本を開いた章扉として確認を提示。背と頁の小口を設け、操作はページ下部へ固定する。 */
export default function BrushedCaseDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-brushed-case-dialog ${className}`}/>;}
