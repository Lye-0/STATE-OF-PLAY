'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 割った石の確認台へ、薄い読む面を載せるダイアログ。左の22pxの切断面と下の30pxの断面を全体の輪郭へ作り、右の25pxの実際の欠けへ連続させる。読む面の右端を台の端へ揃え、普通の四辺の枠を重ねる構成をやめる。 */
export default function LedgerFlapDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-ledger-flap-dialog ${className}`}/>;}
