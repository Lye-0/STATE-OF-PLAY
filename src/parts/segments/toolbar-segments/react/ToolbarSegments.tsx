'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 同じ操作群を小さな道具列として整理し、現在値を下辺で示す。 */
export default function ToolbarSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-toolbar-segments ${className}`}/>;}
