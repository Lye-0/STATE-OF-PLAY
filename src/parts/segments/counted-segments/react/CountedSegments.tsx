'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** ラベルと数値を上下に分け、選択の有無を境界で明確にする。 */
export default function CountedSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-counted-segments ${className}`}/>;}
