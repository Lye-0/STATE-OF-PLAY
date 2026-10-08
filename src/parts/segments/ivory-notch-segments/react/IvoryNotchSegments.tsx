'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 三つのシャッター窓。選択位置に透明な明るい開口が移り、暗い外装と区別される。 */
export default function IvoryNotchSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-ivory-notch-segments ${className}`}/>;}
