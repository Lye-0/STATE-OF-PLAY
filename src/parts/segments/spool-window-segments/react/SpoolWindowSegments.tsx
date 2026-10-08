'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 二つの車輪を、選択した窓の走行台と下のレールへ接続するセグメント。12pxの車輪と9pxの支柱を同じ軸へ合わせ、各窓の上下のレールを同じ断面にする。文字の背後は無地へ保ち、nativeの選択位置だけへ走行の接点を示す。 */
export default function SpoolWindowSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-spool-window-segments ${className}`}/>;}
