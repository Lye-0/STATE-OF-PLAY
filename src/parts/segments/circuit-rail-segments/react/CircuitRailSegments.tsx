'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 上下の顎が選択ラベルを挟む。中の文字は明るい紙面に保ち、色面のスライドに頼らない。 */
export default function CircuitRailSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-circuit-rail-segments ${className}`}/>;}
