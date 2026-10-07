'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 陶器の鍵盤が独立した溝に収まる。 */
export default function CeramicKeySegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-ceramic-key-segments ${className}`}/>;}
