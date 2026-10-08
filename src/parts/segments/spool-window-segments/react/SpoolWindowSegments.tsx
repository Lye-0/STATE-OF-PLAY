'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 金属の走行台が固定ラベルの背後を移動。上下のレールと車輪が同じ位置へ追従。 */
export default function SpoolWindowSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-spool-window-segments ${className}`}/>;}
