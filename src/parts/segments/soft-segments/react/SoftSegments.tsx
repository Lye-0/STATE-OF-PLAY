'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 丸みと控えめなコントラスト。やさしい切り替え。 */
export default function SoftSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-soft-segments ${className}`}/>;}
