'use client';
import React from 'react';
import {GlassTabsView,type GlassTabsProps} from '../../../../shared/liquid-glass/tabs-view';
import '../styles.css';
export type {GlassTabsProps,TabItem} from '../../../../shared/liquid-glass/tabs-view';
export default function FlowTabs({className='',...props}:GlassTabsProps){return <GlassTabsView material="clear" {...props} className={`sop-lg-flow-tabs ${className}`}/>;}
