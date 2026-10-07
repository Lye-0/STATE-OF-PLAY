'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** リレーの接点が選んだ位置に閉じる。 */
export default function RelayBankSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-relay-bank-segments ${className}`}/>;}
