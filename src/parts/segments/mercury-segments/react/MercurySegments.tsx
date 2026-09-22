'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 削り出しの面と溝。選択肢の間を重みのあるキーが滑る。 */
export default function MercurySegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-mercury-segments ${className}`}/>;}
