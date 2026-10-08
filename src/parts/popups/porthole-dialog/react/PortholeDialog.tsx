'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 丸い上端の窓を、軽い一枚の外装で囲むダイアログ。元の丸い上端を150pxの弧へ整え、厚い二重の窓枠と重い操作帯を除く。上の64pxの余白で閉じるnativeボタンを弧の内側へ保ち、本文と操作の密度を揃える。 */
export default function PortholeDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-porthole-dialog ${className}`}/>;}
