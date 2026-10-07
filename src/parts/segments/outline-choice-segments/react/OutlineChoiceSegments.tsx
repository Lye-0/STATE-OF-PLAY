'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 余分な面を増やさない輪郭の選択。 */
export default function OutlineChoiceSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-outline-choice-segments ${className}`}/>;}
