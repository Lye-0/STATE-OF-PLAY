'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 括弧に囲まれた選択位置。 */
export default function BracketSeatSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-bracket-seat-segments ${className}`}/>;}
