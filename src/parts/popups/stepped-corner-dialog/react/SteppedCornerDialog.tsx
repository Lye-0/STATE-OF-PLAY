'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 右上と左下の三段の切欠きが実際の外形を作るダイアログ。切欠きから離して本文と操作を置き、輪郭と余白を対応させる。 */
export default function SteppedCornerDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-stepped-corner-dialog ${className}`}/>;}
