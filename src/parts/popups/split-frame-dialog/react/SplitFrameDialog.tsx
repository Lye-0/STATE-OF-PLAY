'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 対向する二つの枠が、見出しと本文の別々の面を支えるダイアログ。狭幅では読む順に縦へ組み、枠の分割を上下の切れ目へ残す。 */
export default function SplitFrameDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-split-frame-dialog ${className}`}/>;}
