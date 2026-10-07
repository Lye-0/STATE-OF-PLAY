'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 絹のキーに下側だけ張力を残す。 */
export default function SatinKeySegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-satin-key-segments ${className}`}/>;}
