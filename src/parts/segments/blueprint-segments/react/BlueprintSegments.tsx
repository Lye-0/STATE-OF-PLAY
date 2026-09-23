'use client';
import React from 'react';
import {type SegmentProps} from '../../../../shared/segment-view';
import {TransitSegmentView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 寸法線と精密な囲い。青い図面の設定スイッチ。 */
export default function BlueprintSegments({className='',...props}:SegmentProps){return <TransitSegmentView mode="blueprint" {...props} className={`sop-blueprint-segments ${className}`}/>;}
