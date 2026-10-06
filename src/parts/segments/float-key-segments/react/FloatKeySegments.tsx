'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 互いに離れた小さな浮標のように、選択面を水平方向へ並べる。 */
export default function FloatKeySegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-float-key-segments ${className}`}/>;}
