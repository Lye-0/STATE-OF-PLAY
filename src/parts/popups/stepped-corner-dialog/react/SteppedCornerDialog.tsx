'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 太い上の帯と大きい見出し、丸い主操作を一つの編集面へ揃えるダイアログ。元の強弱を残し、閉じる操作・戻る操作・主操作を同じ丸い輪郭へ統一する。罫線と補助文字は薄い同素材へ整え、本文とnative入力を固定する。 */
export default function SteppedCornerDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-stepped-corner-dialog ${className}`}/>;}
