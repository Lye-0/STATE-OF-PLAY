'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 上下二つの付け根で読む底面へ接続した、持ち手のある薄い磁器の盆のダイアログ。左の閉じた楕円の一点接合をやめ、44px幅・126px高の開いた持ち手の上下7pxを、38px先の紙面へ6px重ねる。nativeの内容と操作は持ち手の内側の無地へ固定する。 */
export default function LetterpressDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-letterpress-dialog ${className}`}/>;}
