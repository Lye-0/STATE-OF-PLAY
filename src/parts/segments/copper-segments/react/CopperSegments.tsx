'use client';
import React from 'react';
import {type SegmentProps} from '../../../../shared/segment-view';
import {TransitSegmentView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 銅の磨き面と刻印。設定にも素材の存在感を。 */
export default function CopperSegments({className='',...props}:SegmentProps){return <TransitSegmentView mode="copper" {...props} className={`sop-copper-segments ${className}`}/>;}
