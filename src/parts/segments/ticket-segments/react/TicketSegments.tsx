'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 紙の切り込みとミシン目。小さな旅のセレクター。 */
export default function TicketSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-ticket-segments ${className}`}/>;}
