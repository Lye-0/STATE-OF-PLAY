'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 三つの折り畳み札。選択面が固定した文言の下に折れた足を作り、ページのように接続。 */
export default function RelayBankSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-relay-bank-segments ${className}`}/>;}
