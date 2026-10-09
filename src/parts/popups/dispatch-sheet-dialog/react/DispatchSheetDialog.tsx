'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 穿孔のある綴じ代、送り状の見出し、本文、署名操作の帯を一枚の確認書へ組むダイアログ。本文と操作を紙面の階層で分ける。 */
export default function DispatchSheetDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-dispatch-sheet-dialog ${className}`}/>;}
