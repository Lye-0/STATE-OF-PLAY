'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 浅い岩棚の三つの座。選択した座の中央に色の石がはまり、他の座と輪郭を分ける。 */
export default function SlateDividerSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-slate-divider-segments ${className}`}/>;}
