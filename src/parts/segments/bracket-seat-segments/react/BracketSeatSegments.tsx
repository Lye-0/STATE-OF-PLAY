'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 台座の括弧が現在の選択面を支持する。 */
export default function BracketSeatSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-bracket-seat-segments ${className}`}/>;}
