'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 本文の台と操作の台を、12pxの実空隙で分けて置くダイアログ。上の確認面は左の切断面と大きい上縁へ、下の操作面は28pxずらした別の小口へ連続させる。色違いの普通の箱をやめ、nativeの本文と操作の順序を保つ。 */
export default function SeparatedPlinthDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-separated-plinth-dialog ${className}`}/>;}
