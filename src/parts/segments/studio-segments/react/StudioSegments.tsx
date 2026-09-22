'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** レベルライトと凹み。音響機器のモードセレクター。 */
export default function StudioSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-studio-segments ${className}`}/>;}
