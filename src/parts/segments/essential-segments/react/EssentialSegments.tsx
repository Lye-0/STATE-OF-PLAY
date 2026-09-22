'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** ニュートラルな設定用セグメント。日常の画面に。 */
export default function EssentialSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-essential-segments ${className}`}/>;}
