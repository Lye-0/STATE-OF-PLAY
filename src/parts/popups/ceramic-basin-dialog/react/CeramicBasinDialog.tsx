'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 平らな読む面を、56pxの前の曲面を持つ浅い陶の鉢へ収めるダイアログ。下の楕円の断面と26pxの釉薬の口を、露出した紙の底へ重ねる。外の輪郭を四角い丸角の枠から鉢の前面へ変え、文字とnative操作を曲面の上の無地へ固定する。 */
export default function CeramicBasinDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-ceramic-basin-dialog ${className}`}/>;}
