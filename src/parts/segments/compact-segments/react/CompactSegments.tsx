'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 小さめのラベルと余白。ツールバーや小さな設定欄へ。 */
export default function CompactSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-compact-segments ${className}`}/>;}
