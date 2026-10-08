'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 閉じた二重の軌道の内側に、読む板を浮かべるセグメント。外の二本の軌道は23pxの弧で戻り、選択した区画だけ上下の12pxの橋が板と軌道をつなぐ。読む文字を橋から離して置き、縦でも長文でも区画の接続を保つ。 */
export default function DoubleTrackSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-double-track-segments ${className}`}/>;}
