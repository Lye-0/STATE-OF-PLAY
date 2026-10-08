'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 糸巻きの両端を持つ選択帯。背景の縦線を文字から除き、帯の両端だけで張力を表す。 */
export default function LeverStopSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-lever-stop-segments ${className}`}/>;}
