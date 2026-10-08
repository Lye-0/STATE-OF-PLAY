'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 三眼の観測窓。選択窓だけに照明が入り、共通の長方形マーカーを三つのレンズに置き換える。 */
export default function RaisedBridgeSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-raised-bridge-segments ${className}`}/>;}
