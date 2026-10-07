'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 糸巻きの窓を選択面が横切る。 */
export default function SpoolWindowSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-spool-window-segments ${className}`}/>;}
