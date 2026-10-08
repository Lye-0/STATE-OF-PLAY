'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 本文の両側を、全高の二枚の舞台の袖で包むダイアログ。28pxの二つの折面と7pxの外の小口を、上と下の17pxの斜めの口へ接続する。読む紙を二つの袖の内側へ保ち、短い線と小さい三角だけの二つ折りにしない。 */
export default function TheatreWingDialog({className='',...props}:PopupProps){return <PopupView {...props} motionArt={<span className="sop-popup-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-theatre-wing-dialog ${className}`}/>;}
