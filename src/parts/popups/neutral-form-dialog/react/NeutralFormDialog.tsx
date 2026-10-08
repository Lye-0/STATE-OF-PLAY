'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 中立な明色の本文へ、通常のフォームを置く実用的なダイアログ。元のBの入力向けの構成を残し、重い灰青の本文欄を外面に近い薄い面へ変える。nativeの文字・値・選択を維持し、任意のフォームの読みやすさを優先する。 */
export default function NeutralFormDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-neutral-form-dialog ${className}`}/>;}
