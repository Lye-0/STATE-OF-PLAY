'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 開いた本の左頁で理由、右頁で本文と操作を確認するダイアログ。外周の上を10pxの谷、下を10pxの峰にし、紙面の8pxの折端と9pxの実綴じ面を同じ43%の軸へ収める。普通の中央仕切線をやめ、狭幅では二つの頁を折端で重ねる。native文字と操作順を固定する。 */
export default function BrushedCaseDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-brushed-case-dialog ${className}`}/>;}
