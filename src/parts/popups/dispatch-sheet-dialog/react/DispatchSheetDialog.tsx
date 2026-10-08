'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 一枚の確認書を、送り状の見出し・本文・署名操作の三段へ組むダイアログ。元の三段と紙の上の厚みを保ち、二重の外枠を除く。見出しの補助文字を12pxへ整え、任意の本文とnative入力を読むための余白を揃える。 */
export default function DispatchSheetDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-dispatch-sheet-dialog ${className}`}/>;}
