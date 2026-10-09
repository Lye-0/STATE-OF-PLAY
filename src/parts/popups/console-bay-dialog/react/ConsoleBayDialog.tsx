'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 凹んだ情報画面と右の操作ベイを備えるコンソール型ダイアログ。狭幅では操作を下へ移し、表示と操作の役割を保つ。 */
export default function ConsoleBayDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-console-bay-dialog ${className}`}/>;}
