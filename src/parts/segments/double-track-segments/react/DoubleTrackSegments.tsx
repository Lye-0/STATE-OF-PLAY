'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 二本の軌道の間に選択車を置く。 */
export default function DoubleTrackSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-double-track-segments ${className}`}/>;}
