'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 見出し、入力領域、操作バーを分けたフォーム用ダイアログ。実際の名前・メモ入力例を備え、native入力と任意のフォーム内容を保持する。 */
export default function NeutralFormDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-neutral-form-dialog ${className}`}/>;}
