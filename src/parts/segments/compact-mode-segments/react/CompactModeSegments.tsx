'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 狭いツールバーにも置ける切り替え。 */
export default function CompactModeSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-compact-mode-segments ${className}`}/>;}
