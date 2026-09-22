'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 淡いグレーと白い選択面。色を増やさず読みやすく。 */
export default function PaperSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-paper-segments ${className}`}/>;}
