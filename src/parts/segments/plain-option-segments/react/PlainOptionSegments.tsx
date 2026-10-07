'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 下線だけで分かる軽い選択。 */
export default function PlainOptionSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-plain-option-segments ${className}`}/>;}
