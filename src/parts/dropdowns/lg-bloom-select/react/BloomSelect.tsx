'use client';
import React from 'react';
import {GlassSelectView,type GlassSelectProps} from '../../../../shared/liquid-glass/select-view';
import '../styles.css';
export type {GlassSelectProps,SelectItem} from '../../../../shared/liquid-glass/select-view';
export default function BloomSelect({className='',...props}:GlassSelectProps){return <GlassSelectView material="clear" {...props} className={`sop-lg-bloom-select ${className}`}/>;}
