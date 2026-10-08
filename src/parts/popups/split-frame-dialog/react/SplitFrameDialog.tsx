'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 本文と控えの操作を、一つの切取り線で分ける確認票のダイアログ。元の区分は保ち、周囲の二重枠を上下4pxの紙の厚みへ整理する。薄い票の材質と罫線を揃え、任意の本文とnativeの操作を無地へ置く。 */
export default function SplitFrameDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-split-frame-dialog ${className}`}/>;}
