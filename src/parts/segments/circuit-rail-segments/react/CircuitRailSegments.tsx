'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 回路の平行な線を選択面が接続する。 */
export default function CircuitRailSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-circuit-rail-segments ${className}`}/>;}
