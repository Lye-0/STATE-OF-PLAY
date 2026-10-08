'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 帯の切り欠きが選択位置を指す。先端の折り返しを加え、三つの文字に方向性を持たせる。 */
export default function DoubleTrackSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-double-track-segments ${className}`}/>;}
