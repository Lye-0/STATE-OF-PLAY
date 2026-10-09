'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 中央に整えた読み物と、同じ幅の二つの判断ボタンを持つコンパクトなメッセージ欄。内側の箱を減らし、本文の余白を優先する。 */
export default function WarmMessageDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-warm-message-dialog ${className}`}/>;}
