'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 歯付きの円弧を思わせる区画が、現在の設定位置を固定する。 */
export default function DetentCrownSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-detent-crown-segments ${className}`}/>;}
