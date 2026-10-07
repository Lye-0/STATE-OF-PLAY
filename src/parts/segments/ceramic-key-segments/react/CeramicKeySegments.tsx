'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 陶器のキーが窪みを埋める。 */
export default function CeramicKeySegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-ceramic-key-segments ${className}`}/>;}
