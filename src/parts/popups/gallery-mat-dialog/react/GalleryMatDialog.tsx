'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 二つの斜めの布角と全幅の18pxのマットへ、読む紙を差し込むダイアログ。紫の点線の本文欄を除き、縫い目を外の布縁だけへ移す。対角の布角が紙の端へ重なり、中央の無地へ確認内容とnative操作を固定する。 */
export default function GalleryMatDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-gallery-mat-dialog ${className}`}/>;}
