'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 一枚の確認伝票。切り取り線の内側へ内容をまとめ、確定操作を下の控えとして分ける。 */
export default function SplitFrameDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-split-frame-dialog ${className}`}/>;}
