'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 図面の一枚の紙を、読む面・本文面・操作面の三つの実折面へ畳むダイアログ。二本の支持柱や下のポケットを使わず、20pxずれた三面を、全幅の二つの斜めの返しで接続する。返しの始点と終点を各紙面の端へ合わせ、native文字と任意の本文と操作を無地へ固定する。 */
export default function CanvasPocketDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-canvas-pocket-dialog ${className}`}/>;}
