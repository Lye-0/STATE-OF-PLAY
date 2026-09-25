'use client';
import React from 'react';
import {GlassToggleView,type GlassToggleProps} from '../../../../shared/liquid-glass/toggle-view';
import {config} from '../config';
import '../styles.css';
export type {GlassToggleProps} from '../../../../shared/liquid-glass/toggle-view';
export default function LensToggle({className='',...props}:GlassToggleProps){return <GlassToggleView material="clear" {...props} config={config} className={`sop-lg-lens-toggle ${className}`}/>;}
