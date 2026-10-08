'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 明るい確認面と本文欄を、同じ中立の素材へ揃える実用的なダイアログ。標準のBの操作構成を残し、本文の重い灰青を薄い同系統の面へ変える。見出しの大きさとボタンの読みやすさを保ち、任意の入力を通常のnative APIで使う。 */
export default function PlainConfirmDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-plain-confirm-dialog ${className}`}/>;}
