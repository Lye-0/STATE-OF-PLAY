'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 三つの陶製キーへ沈む選択面。選択位置のキーだけが皿の底へ収まる。 */
export default function CeramicKeySegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-ceramic-key-segments ${className}`}/>;}
