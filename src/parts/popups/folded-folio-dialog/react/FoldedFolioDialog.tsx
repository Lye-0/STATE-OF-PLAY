'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 大きい確認見出しと縦の操作を、右の31pxの折返しを持つ一枚の紙へ置くダイアログ。元の端正な構成を残し、全高の折面と上下の12pxの口を読む紙の端へ接続する。任意の本文は折面の内側55pxへ保ち、一般的な編集画面だけにしない。 */
export default function FoldedFolioDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-folded-folio-dialog ${className}`}/>;}
