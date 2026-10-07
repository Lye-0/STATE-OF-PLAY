'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** レバーの停止点を同じ幅の窓に分ける。 */
export default function LeverStopSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-lever-stop-segments ${className}`}/>;}
