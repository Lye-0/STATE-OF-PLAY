'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 糸巻きの縁で選択窓を挟む。 */
export default function SpoolWindowSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-spool-window-segments ${className}`}/>;}
