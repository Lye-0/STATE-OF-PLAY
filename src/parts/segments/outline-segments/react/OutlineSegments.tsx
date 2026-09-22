'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 背景の塗りを抑えて、輪郭と点で選択を伝える。 */
export default function OutlineSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-outline-segments ${className}`}/>;}
