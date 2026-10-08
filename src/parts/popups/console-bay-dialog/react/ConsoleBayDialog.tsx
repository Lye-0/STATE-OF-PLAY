'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 暗い外装と明るい確認欄を、同じ青灰の作業台へ揃えるダイアログ。元の外装と確認欄の区別を保ち、淡緑と橙を除いて素材を一つにする。本文の明るい面と操作の密度を揃え、任意の入力を安定して読めるようにする。 */
export default function ConsoleBayDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-console-bay-dialog ${className}`}/>;}
