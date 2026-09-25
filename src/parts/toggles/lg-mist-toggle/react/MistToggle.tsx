'use client';
import React from 'react';
import {GlassToggleView,type GlassToggleProps} from '../../../../shared/liquid-glass/toggle-view';
import {config} from '../config';
import '../styles.css';
export type {GlassToggleProps} from '../../../../shared/liquid-glass/toggle-view';
export default function MistToggle({className='',...props}:GlassToggleProps){return <GlassToggleView material="regular" {...props} config={config} className={`sop-lg-mist-toggle lg-quiet ${className}`}/>;}
