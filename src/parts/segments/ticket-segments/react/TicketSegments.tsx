'use client';
import React from 'react';
import {type SegmentProps} from '../../../../shared/segment-view';
import {TransitSegmentView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 紙の切り込みとミシン目。小さな旅のセレクター。 */
export default function TicketSegments({className='',...props}:SegmentProps){return <TransitSegmentView mode="ticket" {...props} className={`sop-ticket-segments ${className}`}/>;}
