'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 磁器の三つの凹み。選択した領域の底だけが濃くなり、滑る面は内壁の丸みに沿う。 */
export default function BracketSeatSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-bracket-seat-segments ${className}`}/>;}
