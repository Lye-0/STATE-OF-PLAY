'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 継ぎ合わせたテープの一片を選ぶ。 */
export default function TapeSpliceSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-tape-splice-segments ${className}`}/>;}
