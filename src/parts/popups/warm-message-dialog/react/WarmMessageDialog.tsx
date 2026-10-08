'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 暖色の外面と本文欄を、同じ穏やかな紙の温度へ揃える実用的な通知ダイアログ。元のBの構成を残し、冷たい灰青の本文欄を同系統の薄い砂色へ変える。本文・入力・操作の読みやすさを優先し、過剰な外装を加えない。 */
export default function WarmMessageDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-warm-message-dialog ${className}`}/>;}
