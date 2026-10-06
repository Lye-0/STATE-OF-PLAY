'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 区画の上下を二枚の面に分け、選択時に上の面を反転させる。 */
export default function SplitFlapSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-split-flap-segments ${className}`}/>;}
