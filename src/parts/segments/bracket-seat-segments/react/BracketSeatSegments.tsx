'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 三つの丸い底の板を、深いU字の座へ落ち着かせるセグメント。板の22pxの底の曲率を外の31pxの受けへ沿わせ、8pxの座の厚みを左右と下へ連続させる。選択面だけを明るくし、文字を受けの内側の無地に固定する。 */
export default function BracketSeatSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-bracket-seat-segments ${className}`}/>;}
