'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 二本の柱の四つの端へ、見出しの帯と読む紙を接続するダイアログ。20pxの柱と26pxの楕円の端を同じ軸へ揃え、帯が柱をまたいで中央の紙へ続く。細い左線だけの支柱を除き、任意の本文とnative操作を柱の内側50pxへ保つ。 */
export default function RibbonHeadingDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-ribbon-heading-dialog ${className}`}/>;}
