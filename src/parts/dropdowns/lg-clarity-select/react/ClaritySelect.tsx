'use client';
import React from 'react';
import {GlassSelectView,type GlassSelectProps} from '../../../../shared/liquid-glass/select-view';
import '../styles.css';
export type {GlassSelectProps,SelectItem} from '../../../../shared/liquid-glass/select-view';
export default function ClaritySelect({className='',...props}:GlassSelectProps){return <GlassSelectView material="regular" {...props} className={`sop-lg-clarity-select lg-quiet ${className}`}/>;}
