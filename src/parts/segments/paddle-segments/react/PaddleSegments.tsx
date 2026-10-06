'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 長い柄をもつ選択面が、選択状態で水平に揃う。 */
export default function PaddleSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-paddle-segments ${className}`}/>;}
