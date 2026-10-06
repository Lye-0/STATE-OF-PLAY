'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 共通の目盛りの上で、現在の区画を細い窓として切り取る。 */
export default function SlideRuleSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-slide-rule-segments ${className}`}/>;}
